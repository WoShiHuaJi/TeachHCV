import { reactive } from 'vue'
import { todayStr, addDays, diffDays } from '../utils/date'

const STORAGE_KEY = 'fe-study-progress-v1'

/** 艾宾浩斯标准复习间隔（天）：学完后的第 1/2/4/7/15/30/60 天复习 */
export const REVIEW_INTERVALS = [1, 2, 4, 7, 15, 30, 60]

/** 测试通过线：正确率 >= 60% 视为学会 */
export const PASS_RATE = 0.6

/** 每日复习上限：逾期复习分批消化，避免断签后一天堆积过多 */
export const DAILY_REVIEW_LIMIT = 10

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      return { lessons: data.lessons || {}, daily: data.daily || {}, wrong: data.wrong || {} }
    }
  } catch (e) {
    console.warn('进度数据读取失败，已重置', e)
  }
  return { lessons: {}, daily: {}, wrong: {} }
}

const state = reactive(load())

/** 进度保存监听器（供同步模块注册，数据变动后自动备份） */
const saveListeners = []
export function onProgressSaved(fn) {
  saveListeners.push(fn)
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ lessons: state.lessons, daily: state.daily, wrong: state.wrong })
  )
  saveListeners.forEach((fn) => {
    try {
      fn()
    } catch (e) {
      console.warn('自动同步失败', e)
    }
  })
}

function touchDaily(type, id) {
  const t = todayStr()
  if (!state.daily[t]) state.daily[t] = { learned: [], reviewed: [] }
  if (!state.daily[t][type].includes(id)) state.daily[t][type].push(id)
}

export function useStore() {
  /** 某课的学习记录，未学返回 null */
  function lessonState(id) {
    return state.lessons[id] || null
  }

  function isLearned(id) {
    return !!state.lessons[id]
  }

  /**
   * 复习间隔：某次测验错题 >= 2 道时进入「密集模式」，间隔减半，
   * 让掌握不牢的知识更快再次出现（侧重调整）。
   */
  function stageInterval(stage, dense) {
    const iv = REVIEW_INTERVALS[Math.min(stage, REVIEW_INTERVALS.length - 1)]
    return dense ? Math.max(1, Math.round(iv / 2)) : iv
  }

  /** 记录错题（含「不知道」），indices 为该课 quiz 数组的原始下标 */
  function addWrong(lessonId, indices) {
    if (!indices || !indices.length) return
    const cur = state.wrong[lessonId] || { indices: [], lastDate: '' }
    cur.indices = [...new Set([...cur.indices, ...indices])].sort((a, b) => a - b)
    cur.lastDate = todayStr()
    state.wrong[lessonId] = cur
  }

  /** 错题重练后移除已答对的题 */
  function clearWrong(lessonId, indices) {
    const cur = state.wrong[lessonId]
    if (!cur) return
    cur.indices = cur.indices.filter((i) => !indices.includes(i))
    if (!cur.indices.length) delete state.wrong[lessonId]
    save()
  }

  function wrongCount() {
    return Object.values(state.wrong).reduce((s, w) => s + w.indices.length, 0)
  }

  /**
   * 薄弱分析：错题数 ×2 + 复习失败次数 ×3 得出薄弱分，降序。
   * 供首页「需要加强」和统计页「薄弱分析」使用。
   */
  function weakSpots(allLessons) {
    return allLessons
      .map((l) => {
        const rec = state.lessons[l.id]
        const wrong = state.wrong[l.id]?.indices.length || 0
        const fails = rec ? rec.reviewHistory.filter((h) => !h.pass).length : 0
        return { lesson: l, wrong, fails, learned: !!rec, score: wrong * 2 + fails * 3 }
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
  }

  /**
   * 记录新课测试结果。通过才标记为已学并安排首次复习；无论是否通过都会记录错题。
   * 已学过的课「重新测试」不重置复习进度，只更新最高分和错题。
   * @returns 是否通过
   */
  function recordLearn(id, correct, total, wrongIndices = []) {
    const pass = correct / total >= PASS_RATE
    addWrong(id, wrongIndices)
    const prev = state.lessons[id]
    // 已学过：视为巩固练习，保留复习阶段与日程
    if (prev) {
      if (pass) {
        prev.bestScore = Math.max(prev.bestScore, correct / total)
        touchDaily('learned', id)
      }
      save()
      return pass
    }
    if (!pass) {
      save()
      return false
    }
    const t = todayStr()
    state.lessons[id] = {
      learnedAt: t,
      bestScore: correct / total,
      reviewStage: 0,
      nextReviewDate: addDays(t, stageInterval(0, wrongIndices.length >= 2)),
      mastered: false,
      reviewHistory: []
    }
    touchDaily('learned', id)
    save()
    return true
  }

  /**
   * 记录复习测试结果。
   * 通过：进入下一复习阶段；完成全部 7 个阶段后标记为「已掌握」。
   * 未通过：回到第一阶段，且**保留在今日待复习列表中**（不消失，可立即重试直到通过）。
   * 错题 >= 2 道时进入密集模式（间隔减半）。
   * @returns 是否通过
   */
  function recordReview(id, correct, total, wrongIndices = []) {
    const rec = state.lessons[id]
    if (!rec) return false
    const pass = correct / total >= PASS_RATE
    const t = todayStr()
    addWrong(id, wrongIndices)
    rec.reviewHistory.push({ date: t, score: correct / total, pass })
    if (pass) {
      rec.reviewStage += 1
      if (rec.reviewStage >= REVIEW_INTERVALS.length) {
        rec.mastered = true
        rec.nextReviewDate = null
      } else {
        rec.nextReviewDate = addDays(t, stageInterval(rec.reviewStage, wrongIndices.length >= 2))
      }
    } else {
      rec.reviewStage = 0
      rec.nextReviewDate = t
    }
    touchDaily('reviewed', id)
    save()
    return pass
  }

  /** 今日到期（含逾期）待复习的课程 id 列表，按到期日升序 */
  function dueReviewIds(allLessons) {
    const t = todayStr()
    return allLessons
      .filter((l) => {
        const rec = state.lessons[l.id]
        return rec && !rec.mastered && rec.nextReviewDate && rec.nextReviewDate <= t
      })
      .sort((a, b) => (state.lessons[a.id].nextReviewDate < state.lessons[b.id].nextReviewDate ? -1 : 1))
      .map((l) => l.id)
  }

  /** 今日复习安排：逾期过多时分批，每天最多 DAILY_REVIEW_LIMIT 道 */
  function todayReviews(allLessons) {
    const all = dueReviewIds(allLessons)
    return { list: all.slice(0, DAILY_REVIEW_LIMIT), total: all.length, limit: DAILY_REVIEW_LIMIT }
  }

  /** 某天是否已打卡（当天有任何学习/复习活动即视为打卡） */
  function isCheckedIn(dateStr) {
    const rec = state.daily[dateStr]
    return !!(rec && (rec.learned.length > 0 || rec.reviewed.length > 0))
  }

  /** 断签天数：从昨天往前连续没学习的天数（从未学过或昨天学了都返回 0） */
  function gapDays() {
    const activeDates = Object.keys(state.daily).filter(isCheckedIn).sort()
    if (!activeDates.length) return 0
    const first = activeDates[0]
    let n = 0
    let cursor = addDays(todayStr(), -1)
    while (cursor >= first && !isCheckedIn(cursor)) {
      n += 1
      cursor = addDays(cursor, -1)
    }
    return n
  }

  /** 未来待复习安排，按日期升序 */
  function upcomingReviews(allLessons) {
    const t = todayStr()
    return allLessons
      .filter((l) => {
        const rec = state.lessons[l.id]
        return rec && !rec.mastered && rec.nextReviewDate && rec.nextReviewDate > t
      })
      .map((l) => ({ lesson: l, date: state.lessons[l.id].nextReviewDate, stage: state.lessons[l.id].reviewStage }))
      .sort((a, b) => (a.date < b.date ? -1 : 1))
  }

  /** 连续学习天数（今天没学则从今天的前一天往回算） */
  function streakDays() {
    let streak = 0
    let cursor = todayStr()
    const hasActivity = (d) => {
      const rec = state.daily[d]
      return rec && (rec.learned.length > 0 || rec.reviewed.length > 0)
    }
    if (!hasActivity(cursor)) cursor = addDays(cursor, -1)
    while (hasActivity(cursor)) {
      streak += 1
      cursor = addDays(cursor, -1)
    }
    return streak
  }

  /** 汇总统计 */
  function stats(allLessons) {
    const records = Object.values(state.lessons)
    const learned = records.length
    const mastered = records.filter((r) => r.mastered).length
    const reviewCount = records.reduce((s, r) => s + r.reviewHistory.length, 0)
    const reviewPass = records.reduce((s, r) => s + r.reviewHistory.filter((h) => h.pass).length, 0)
    const activeDays = Object.keys(state.daily).filter(
      (d) => state.daily[d].learned.length > 0 || state.daily[d].reviewed.length > 0
    ).length
    return {
      learned,
      total: allLessons.length,
      mastered,
      reviewCount,
      reviewPassRate: reviewCount ? Math.round((reviewPass / reviewCount) * 100) : 0,
      activeDays,
      streak: streakDays()
    }
  }

  /** 近 7 天每日活动量（用于简单柱状图） */
  function last7Days() {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const d = addDays(todayStr(), -i)
      const rec = state.daily[d]
      days.push({
        date: d,
        count: rec ? rec.learned.length + rec.reviewed.length : 0
      })
    }
    return days
  }

  function resetAll() {
    state.lessons = {}
    state.daily = {}
    state.wrong = {}
    save()
  }

  return {
    state,
    lessonState,
    isLearned,
    recordLearn,
    recordReview,
    addWrong,
    clearWrong,
    wrongCount,
    weakSpots,
    dueReviewIds,
    todayReviews,
    isCheckedIn,
    gapDays,
    upcomingReviews,
    streakDays,
    stats,
    last7Days,
    resetAll
  }
}
