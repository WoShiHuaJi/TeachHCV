<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'
import { allLessons, modules, getLesson } from '../data'
import { formatCN, diffDays, todayStr } from '../utils/date'

const store = useStore()

const s = computed(() => store.stats(allLessons))

/** 今日待复习 */
const dueReviews = computed(() => store.dueReviewIds(allLessons).map((id) => getLesson(id)))

/** 推荐新课：按全局顺序找出前 2 门未学的课 */
const nextLessons = computed(() => allLessons.filter((l) => !store.isLearned(l.id)).slice(0, 2))

const allDone = computed(() => dueReviews.value.length === 0 && nextLessons.value.length === 0)

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
    <div class="card" style="display: flex; text-align: center">
      <div style="flex: 1">
        <div style="font-size: 22px; font-weight: 800; color: var(--primary)">{{ s.streak }}</div>
        <div class="muted">连续学习(天)</div>
      </div>
      <div style="flex: 1; border-left: 1px solid var(--border)">
        <div style="font-size: 22px; font-weight: 800; color: var(--primary)">{{ s.learned }}/{{ s.total }}</div>
        <div class="muted">已学课程</div>
      </div>
      <div style="flex: 1; border-left: 1px solid var(--border)">
        <div style="font-size: 22px; font-weight: 800; color: var(--primary)">{{ s.mastered }}</div>
        <div class="muted">已掌握</div>
      </div>
    </div>

    <!-- 今日复习 -->
    <div class="section-title">
      🔁 今日复习
      <span v-if="dueReviews.length" class="badge">{{ dueReviews.length }}</span>
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

    <!-- 今日新课 -->
    <div class="section-title">📖 今日新课</div>
    <template v-if="nextLessons.length">
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

    <!-- 模块进度 -->
    <div class="section-title">🗂 学习进度</div>
    <router-link
      v-for="m in modules"
      :key="m.id"
      :to="`/modules/${m.id}`"
      class="card"
      style="display: block; text-decoration: none; color: inherit"
    >
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px">
        <b>{{ m.icon }} {{ m.name }}</b>
        <span class="muted">{{ moduleProgress(m).learned }}/{{ moduleProgress(m).total }}</span>
      </div>
      <div class="progress">
        <i :style="{ width: moduleProgress(m).pct + '%', background: m.color }"></i>
      </div>
    </router-link>
  </div>
</template>
