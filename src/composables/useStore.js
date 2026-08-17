import { reactive } from 'vue'
import { todayStr, addDays, diffDays } from '../utils/date'

const STORAGE_KEY = 'fe-study-progress-v1'

/** 艾宾浩斯标准复习间隔（天）：学完后的第 1/2/4/7/15/30/60 天复习 */
export const REVIEW_INTERVALS = [1, 2, 4, 7, 15, 30, 60]

/** 测试通过线：正确率 >= 60% 视为学会 */
export const PASS_RATE = 0.6

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      return { lessons: data.lessons || {}, daily: data.daily || {} }
    }
  } catch (e) {
    console.warn('进度数据读取失败，已重置', e)
  }
  return { lessons: {}, daily: {} }
}

const state = reactive(load())

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ lessons: state.lessons, daily: state.daily }))
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
   * 记录新课测试结果。通过才标记为已学并安排首次复习。
   * @returns 是否通过
   */
  function recordLearn(id, correct, total) {
    const pass = correct / total >= PASS_RATE
    if (!pass) return false
    const t = todayStr()
    const prev = state.lessons[id]
    state.lessons[id] = {
      learnedAt: prev?.learnedAt || t,
      bestScore: Math.max(prev?.bestScore || 0, correct / total),
      reviewStage: 0,
      nextReviewDate: addDays(t, REVIEW_INTERVALS[0]),
      mastered: false,
      reviewHistory: prev?.reviewHistory || []
    }
    touchDaily('learned', id)
    save()
    return true
  }

  /**
   * 记录复习测试结果。
   * 通过：进入下一复习阶段；完成全部 7 个阶段后标记为「已掌握」。
   * 未通过：回到第一阶段，明天重新复习。
   * @returns 是否通过
   */
  function recordReview(id, correct, total) {
    const rec = state.lessons[id]
    if (!rec) return false
    const pass = correct / total >= PASS_RATE
    const t = todayStr()
    rec.reviewHistory.push({ date: t, score: correct / total, pass })
    if (pass) {
      rec.reviewStage += 1
      if (rec.reviewStage >= REVIEW_INTERVALS.length) {
        rec.mastered = true
        rec.nextReviewDate = null
      } else {
        rec.nextReviewDate = addDays(t, REVIEW_INTERVALS[rec.reviewStage])
      }
    } else {
      rec.reviewStage = 0
      rec.nextReviewDate = addDays(t, REVIEW_INTERVALS[0])
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
    save()
  }

  return {
    state,
    lessonState,
    isLearned,
    recordLearn,
    recordReview,
    dueReviewIds,
    upcomingReviews,
    streakDays,
    stats,
    last7Days,
    resetAll
  }
}
