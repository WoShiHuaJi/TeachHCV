<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'
import { allLessons, modules, getLesson } from '../data'
import { formatCN, diffDays, todayStr } from '../utils/date'

const store = useStore()

const s = computed(() => store.stats(allLessons))

/** 今日复习（逾期分批：每天最多安排 limit 道） */
const reviewInfo = computed(() => store.todayReviews(allLessons))
const dueReviews = computed(() => reviewInfo.value.list.map((id) => getLesson(id)))
const hiddenReviews = computed(() => reviewInfo.value.total - reviewInfo.value.list.length)
/** 逾期积压 > 5 道时暂停新课推荐，先清复习债 */
const pauseNew = computed(() => reviewInfo.value.total > 5)

/** 推荐新课：按全局顺序找出前 2 门未学的课 */
const nextLessons = computed(() => allLessons.filter((l) => !store.isLearned(l.id)).slice(0, 2))

/** 打卡与断签 */
const checkedIn = computed(() => store.isCheckedIn(todayStr()))
const gap = computed(() => store.gapDays())
const todayDaily = computed(() => store.state.daily[todayStr()] || { learned: [], reviewed: [] })

/** 薄弱知识点（错题×2 + 复习失败×3），取前 3 */
const weakSpots = computed(() => store.weakSpots(allLessons).slice(0, 3))

const allDone = computed(
  () => dueReviews.value.length === 0 && (pauseNew.value || nextLessons.value.length === 0)
)

function moduleProgress(m) {
  const learned = m.lessons.filter((l) => store.isLearned(l.id)).length
  return { learned, total: m.lessons.length, pct: Math.round((learned / m.lessons.length) * 100) }
}

function overdueDays(lesson) {
  const rec = store.lessonState(lesson.id)
  if (!rec) return 0
  return diffDays(todayStr(), rec.nextReviewDate)
}
</script>

<template>
  <div class="page">
    <!-- 概览条 -->
    <div class="card stat-strip">
      <div class="cell">
        <div class="bignum">{{ s.streak }}</div>
        <div class="muted">连续学习(天)</div>
      </div>
      <div class="cell">
        <div class="bignum">{{ s.learned }}/{{ s.total }}</div>
        <div class="muted">已学课程</div>
      </div>
      <div class="cell">
        <div class="bignum">{{ s.mastered }}</div>
        <div class="muted">已掌握</div>
      </div>
    </div>

    <!-- 打卡状态 -->
    <div class="card flex">
      <span style="font-size: 28px">{{ checkedIn ? '✅' : '⭕' }}</span>
      <div class="grow">
        <b>{{ checkedIn ? '今日已打卡' : '今日未打卡' }}</b>
        <div class="muted">
          {{ checkedIn ? `已学 ${todayDaily.learned.length} 课 · 复习 ${todayDaily.reviewed.length} 道` : '完成任意 1 项学习任务即可打卡' }}
        </div>
      </div>
      <span class="tag">连续 {{ s.streak }} 天</span>
    </div>

    <!-- 断签回归提示 -->
    <div v-if="gap > 0" class="notice notice-warn">
      <b>😴 已 {{ gap }} 天没学习，欢迎回来！</b>
      <p class="muted" style="margin-top: 4px">
        已为你调整计划：逾期复习分批消化（每天最多 10 道）<template v-if="pauseNew">，新课推荐已暂停，先清复习债</template>。今天完成 1 项任务即可重新打卡。
      </p>
    </div>

    <!-- 今日复习 -->
    <div class="section-title">
      🔁 今日复习
      <span v-if="reviewInfo.total" class="badge">{{ reviewInfo.total }}</span>
    </div>
    <template v-if="dueReviews.length">
      <router-link
        v-for="l in dueReviews"
        :key="l.id"
        :to="`/review/${l.id}`"
        class="lesson-item"
      >
        <span class="dot" :style="{ background: l.moduleColor }"></span>
        <div class="info">
          <div class="title">{{ l.title }}</div>
          <div class="sub">
            {{ l.moduleName }} · 第 {{ store.lessonState(l.id).reviewStage + 1 }} 次复习
            <template v-if="overdueDays(l) > 0"> · 已逾期 {{ overdueDays(l) }} 天</template>
          </div>
        </div>
        <span class="arrow">›</span>
      </router-link>
    </template>
    <div v-else class="card empty">🎉 今日没有待复习的内容</div>
    <p v-if="hiddenReviews > 0" class="muted" style="margin: -4px 0 8px; padding: 0 4px">
      📦 还有 {{ hiddenReviews }} 道逾期复习，已自动分摊到明天及以后（每天最多 10 道）
    </p>

    <!-- 今日新课 -->
    <div class="section-title">📖 今日新课</div>
    <div v-if="pauseNew" class="notice notice-amber">
      ⏸ 新课推荐已暂停：当前有 {{ reviewInfo.total }} 道到期复习，先清复习债再继续新课，明天会根据进度自动恢复。
    </div>
    <template v-else-if="nextLessons.length">
      <router-link v-for="l in nextLessons" :key="l.id" :to="`/lesson/${l.id}`" class="lesson-item">
        <span class="dot" :style="{ background: l.moduleColor }"></span>
        <div class="info">
          <div class="title">{{ l.title }}</div>
          <div class="sub">{{ l.moduleName }} · 约 {{ l.minutes }} 分钟 · {{ l.quiz.length }} 道测试题</div>
        </div>
        <span class="arrow">›</span>
      </router-link>
    </template>
    <div v-else class="card empty">🏆 全部课程已学完，坚持复习巩固吧！</div>

    <div v-if="allDone" class="card empty" style="font-size: 15px">
      今天的任务全部完成，明天见！
    </div>

    <!-- 薄弱巩固：根据错题和复习失败记录智能推荐 -->
    <template v-if="weakSpots.length">
      <div class="section-title">💪 需要加强</div>
      <router-link
        v-for="w in weakSpots"
        :key="w.lesson.id"
        :to="w.wrong > 0 ? `/wrongbook/${w.lesson.id}` : `/lesson/${w.lesson.id}`"
        class="lesson-item"
      >
        <span class="dot" :style="{ background: 'var(--warning)' }"></span>
        <div class="info">
          <div class="title">{{ w.lesson.title }}</div>
          <div class="sub">
            {{ w.lesson.moduleName }} ·
            <template v-if="w.wrong">错题 {{ w.wrong }} 道</template>
            <template v-if="w.wrong && w.fails"> · </template>
            <template v-if="w.fails">复习失败 {{ w.fails }} 次</template>
          </div>
        </div>
        <span class="arrow">›</span>
      </router-link>
    </template>

    <!-- 模块进度 -->
    <div class="section-title">🗂 学习进度</div>
    <router-link
      v-for="m in modules"
      :key="m.id"
      :to="`/modules/${m.id}`"
      class="card module-card"
    >
      <div class="mc-head">
        <b>{{ m.icon }} {{ m.name }}</b>
        <span class="muted">{{ moduleProgress(m).learned }}/{{ moduleProgress(m).total }}</span>
      </div>
      <div class="progress">
        <i :style="{ width: moduleProgress(m).pct + '%', background: m.color }"></i>
      </div>
    </router-link>
  </div>
</template>
