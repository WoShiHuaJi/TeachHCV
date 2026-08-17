<script setup>
import { computed, ref } from 'vue'
import { useStore } from '../composables/useStore'
import { useSync } from '../composables/useSync'
import { allLessons, modules } from '../data'
import { formatCN } from '../utils/date'

const store = useStore()
const sync = useSync()
const s = computed(() => store.stats(allLessons))
const week = computed(() => store.last7Days())
const maxCount = computed(() => Math.max(1, ...week.value.map((d) => d.count)))

/** 薄弱分析：错题×2 + 复习失败×3，取前 5 */
const weakSpots = computed(() => store.weakSpots(allLessons).slice(0, 5))

function moduleProgress(m) {
  const learned = m.lessons.filter((l) => store.isLearned(l.id)).length
  return { learned, total: m.lessons.length, pct: Math.round((learned / m.lessons.length) * 100) }
}

/* ===== 数据同步 ===== */
const tokenInput = ref(sync.token.value)
const showTokenHelp = ref(false)

function saveToken() {
  sync.saveToken(tokenInput.value)
  tokenInput.value = sync.token.value
}

function removeToken() {
  sync.clearToken()
  tokenInput.value = ''
  sync.message.value = ''
}

function confirmRestore() {
  if (window.confirm('从云端恢复会覆盖当前设备的学习进度，确定继续吗？')) {
    sync.restoreNow()
  }
}

/* ===== 重置 ===== */
const confirmReset = ref(false)
function doReset() {
  store.resetAll()
  confirmReset.value = false
}
</script>

<template>
  <div class="page">
    <div class="section-title" style="margin-top: 4px">📊 学习统计</div>

    <div class="stat-grid">
      <div class="stat-cell">
        <div class="num">{{ s.streak }}</div>
        <div class="label">连续学习(天)</div>
      </div>
      <div class="stat-cell">
        <div class="num">{{ s.learned }}/{{ s.total }}</div>
        <div class="label">已学课程</div>
      </div>
      <div class="stat-cell">
        <div class="num">{{ s.mastered }}</div>
        <div class="label">已掌握课程</div>
      </div>
      <div class="stat-cell">
        <div class="num">{{ s.reviewPassRate }}%</div>
        <div class="label">复习通过率（{{ s.reviewCount }} 次）</div>
      </div>
    </div>

    <div class="section-title">📈 近 7 天学习量</div>
    <div class="card">
      <div class="bar-chart">
        <div v-for="d in week" :key="d.date" class="bar">
          <i :style="{ height: (d.count / maxCount) * 100 + '%', opacity: d.count ? 1 : 0.25 }"></i>
          <span>{{ formatCN(d.date) }}</span>
        </div>
      </div>
      <p class="muted" style="text-align: center; margin-top: 8px">累计活跃 {{ s.activeDays }} 天</p>
    </div>

    <div class="section-title">🗂 各模块进度</div>
    <div v-for="m in modules" :key="m.id" class="card">
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
        <b>{{ m.icon }} {{ m.name }}</b>
        <span class="muted">{{ moduleProgress(m).learned }}/{{ moduleProgress(m).total }}</span>
      </div>
      <div class="progress">
        <i :style="{ width: moduleProgress(m).pct + '%', background: m.color }"></i>
      </div>
    </div>

    <div class="section-title">🧠 薄弱分析</div>
    <div v-if="weakSpots.length" class="card" style="padding: 8px 16px">
      <p class="muted" style="padding: 8px 0 4px">按 错题×2 + 复习失败×3 排序，优先补前面的：</p>
      <router-link
        v-for="(w, i) in weakSpots"
        :key="w.lesson.id"
        :to="w.wrong > 0 ? `/wrongbook/${w.lesson.id}` : `/lesson/${w.lesson.id}`"
        style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); text-decoration: none; color: inherit"
      >
        <span style="font-size: 14px">{{ i + 1 }}. {{ w.lesson.title }}</span>
        <span class="muted">
          {{ w.wrong ? `错题${w.wrong}` : '' }}{{ w.wrong && w.fails ? ' · ' : '' }}{{ w.fails ? `失败${w.fails}次` : '' }}
        </span>
      </router-link>
    </div>
    <div v-else class="card empty">还没有错题记录，去做几套测试吧</div>

    <div class="section-title">☁️ 数据同步（跨设备）</div>
    <div class="card">
      <template v-if="!sync.token.value">
        <p class="muted" style="margin-bottom: 10px">
          学习进度默认只保存在本设备。填写 GitHub Token 后，可将进度备份到你的私有 Gist，实现手机、电脑间同步。
        </p>
        <input
          v-model="tokenInput"
          type="password"
          placeholder="粘贴 GitHub Token（ghp_ 开头）"
          style="width: 100%; padding: 12px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 14px; margin-bottom: 10px"
        />
        <button class="btn btn-primary" :disabled="!tokenInput.trim()" @click="saveToken">保存 Token</button>
        <button class="btn btn-ghost" @click="showTokenHelp = !showTokenHelp">
          {{ showTokenHelp ? '收起帮助' : '❓ 如何获取 Token？' }}
        </button>
        <div v-if="showTokenHelp" class="explain ok" style="margin-top: 10px">
          1. 打开 GitHub → 头像 → Settings → Developer settings → Personal access tokens → Tokens (classic)<br />
          2. 点 Generate new token (classic)<br />
          3. 只勾选 <b>gist</b> 一个权限，生成并复制 Token 粘贴到上面<br />
          <span class="muted">Token 只存在你自己设备的浏览器里，请妥善保管。</span>
        </div>
      </template>
      <template v-else>
        <p style="margin-bottom: 6px">
          ✅ 已绑定 Token
          <span class="muted">（{{ sync.token.value.slice(0, 7) }}…）</span>
        </p>
        <p v-if="sync.lastSyncAt.value" class="muted" style="margin-bottom: 10px">上次同步：{{ sync.lastSyncAt.value }}</p>
        <button class="btn btn-primary" :disabled="sync.syncing.value" @click="sync.backupNow()">
          {{ sync.syncing.value ? '同步中…' : '⬆️ 立即备份到云端' }}
        </button>
        <button class="btn btn-outline" :disabled="sync.syncing.value" @click="confirmRestore">⬇️ 从云端恢复</button>
        <button
          class="btn btn-ghost"
          @click="sync.setAutoSync(!sync.autoSync.value)"
        >
          自动备份：{{ sync.autoSync.value ? '已开启 ✅（学习后自动上传）' : '已关闭' }}
        </button>
        <button class="btn btn-ghost" @click="removeToken">解除绑定</button>
        <p v-if="sync.message.value" style="margin-top: 8px; font-size: 14px">{{ sync.message.value }}</p>
        <p class="muted" style="margin-top: 8px">💡 新设备使用：填同样的 Token → 点「从云端恢复」即可。</p>
      </template>
    </div>

    <div class="section-title">⚙️ 设置</div>
    <div class="card">
      <template v-if="!confirmReset">
        <button class="btn btn-outline" style="border-color: var(--danger); color: var(--danger)" @click="confirmReset = true">
          清空全部学习数据
        </button>
      </template>
      <template v-else>
        <p style="margin-bottom: 10px; color: var(--danger)">确定要清空所有学习进度吗？此操作不可恢复！</p>
        <button class="btn btn-primary" style="background: var(--danger)" @click="doReset">确认清空</button>
        <button class="btn btn-ghost" @click="confirmReset = false">取消</button>
      </template>
    </div>
  </div>
</template>
