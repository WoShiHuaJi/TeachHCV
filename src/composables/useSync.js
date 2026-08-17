import { ref } from 'vue'
import { onProgressSaved } from './useStore'

/**
 * 数据同步：借助 GitHub Gist（私有）做云端备份，无需自建服务器。
 * 用户只需在 GitHub 生成一个带 gist 权限的 Token，填入统计页设置即可。
 */

const TOKEN_KEY = 'fe-study-sync-token'
const LASTSYNC_KEY = 'fe-study-last-sync'
const AUTOSYNC_KEY = 'fe-study-autosync'
const PROGRESS_KEY = 'fe-study-progress-v1'
const GIST_FILE = 'teachhcv-progress.json'
const GIST_DESC = 'TeachHCV 前端学习进度备份'

const token = ref(localStorage.getItem(TOKEN_KEY) || '')
const lastSyncAt = ref(localStorage.getItem(LASTSYNC_KEY) || '')
const autoSync = ref(localStorage.getItem(AUTOSYNC_KEY) !== '0')
const syncing = ref(false)
const message = ref('')

let autoSyncRegistered = false
let debounceTimer = null

export function useSync() {
  function headers() {
    return {
      Authorization: `token ${token.value}`,
      Accept: 'application/vnd.github.v3+json'
    }
  }

  function saveToken(t) {
    token.value = t.trim()
    localStorage.setItem(TOKEN_KEY, token.value)
  }

  function clearToken() {
    token.value = ''
    localStorage.removeItem(TOKEN_KEY)
  }

  function setAutoSync(on) {
    autoSync.value = on
    localStorage.setItem(AUTOSYNC_KEY, on ? '1' : '0')
  }

  function markSynced() {
    lastSyncAt.value = new Date().toLocaleString('zh-CN')
    localStorage.setItem(LASTSYNC_KEY, lastSyncAt.value)
  }

  /** 找到备份用的 Gist，没有返回 null */
  async function findGistId() {
    const res = await fetch('https://api.github.com/gists?per_page=100', { headers: headers() })
    if (!res.ok) throw new Error(`Token 校验失败（${res.status}），请检查 Token 是否有 gist 权限`)
    const gists = await res.json()
    const g = gists.find((x) => x.files && x.files[GIST_FILE])
    return g ? g.id : null
  }

  /** 上传本地进度到云端（没有备份则新建） */
  async function upload() {
    if (!token.value) throw new Error('请先填写 GitHub Token')
    const data = localStorage.getItem(PROGRESS_KEY) || '{}'
    const id = await findGistId()
    const body = JSON.stringify({
      description: GIST_DESC,
      public: false,
      files: { [GIST_FILE]: { content: data } }
    })
    const res = await fetch(id ? `https://api.github.com/gists/${id}` : 'https://api.github.com/gists', {
      method: id ? 'PATCH' : 'POST',
      headers: headers(),
      body
    })
    if (!res.ok) throw new Error(`上传失败（${res.status}）`)
    markSynced()
  }

  /** 从云端下载进度（返回进度 JSON 字符串，不直接写入） */
  async function download() {
    if (!token.value) throw new Error('请先填写 GitHub Token')
    const id = await findGistId()
    if (!id) throw new Error('云端还没有备份，请先在其他设备上执行一次「备份到云端」')
    const res = await fetch(`https://api.github.com/gists/${id}`, { headers: headers() })
    if (!res.ok) throw new Error(`下载失败（${res.status}）`)
    const g = await res.json()
    const content = g.files?.[GIST_FILE]?.content
    if (!content) throw new Error('云端备份内容为空')
    JSON.parse(content) // 校验格式
    return content
  }

  /** 恢复：用云端数据覆盖本地并刷新页面 */
  async function restore() {
    const content = await download()
    localStorage.setItem(PROGRESS_KEY, content)
    markSynced()
    location.reload()
  }

  /** 带 UI 状态的上传 */
  async function backupNow() {
    syncing.value = true
    message.value = ''
    try {
      await upload()
      message.value = '✅ 已备份到云端'
    } catch (e) {
      message.value = '❌ ' + e.message
    } finally {
      syncing.value = false
    }
  }

  /** 带 UI 状态的恢复 */
  async function restoreNow() {
    syncing.value = true
    message.value = ''
    try {
      await restore()
    } catch (e) {
      message.value = '❌ ' + e.message
      syncing.value = false
    }
  }

  return { token, lastSyncAt, autoSync, syncing, message, saveToken, clearToken, setAutoSync, backupNow, restoreNow }
}

/** 注册自动备份：进度变动后 3 秒内自动上传（App 启动时调用一次） */
export function initAutoSync() {
  if (autoSyncRegistered) return
  autoSyncRegistered = true
  onProgressSaved(() => {
    if (!autoSync.value || !token.value) return
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(async () => {
      try {
        const { backupNow } = useSync()
        await backupNow()
      } catch (e) {
        /* 静默失败，下次保存再试 */
      }
    }, 3000)
  })
}
