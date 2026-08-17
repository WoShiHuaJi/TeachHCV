<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'
import { allLessons, getLesson } from '../data'
import { formatCN } from '../utils/date'

const store = useStore()

const dueReviews = computed(() => store.dueReviewIds(allLessons).map((id) => getLesson(id)))
const upcoming = computed(() => store.upcomingReviews(allLessons))
const mastered = computed(() => allLessons.filter((l) => store.lessonState(l.id)?.mastered))
</script>

<template>
  <div class="page">
    <div class="section-title" style="margin-top: 4px">
      🔁 今日待复习
      <span v-if="dueReviews.length" class="badge">{{ dueReviews.length }}</span>
    </div>
    <template v-if="dueReviews.length">
      <router-link v-for="l in dueReviews" :key="l.id" :to="`/review/${l.id}`" class="lesson-item">
        <span class="dot" :style="{ background: l.moduleColor }"></span>
        <div class="info">
          <div class="title">{{ l.title }}</div>
          <div class="sub">
            {{ l.moduleName }} · 第 {{ store.lessonState(l.id).reviewStage + 1 }} 次复习 ·
            {{ l.quiz.length }} 道题
          </div>
        </div>
        <span class="arrow">›</span>
      </router-link>
    </template>
    <div v-else class="card empty">✅ 没有到期的复习任务</div>

    <div class="section-title">🗓 复习日程</div>
    <div v-if="upcoming.length" class="card" style="padding: 8px 16px">
      <div
        v-for="u in upcoming"
        :key="u.lesson.id"
        style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border)"
      >
        <span style="font-size: 14px">{{ u.lesson.title }}</span>
        <span class="muted">{{ formatCN(u.date) }} · 第 {{ u.stage + 1 }} 次</span>
      </div>
    </div>
    <div v-else class="card empty">暂无安排，先去学习新课吧</div>

    <div class="section-title">🎓 已掌握（完成全部复习）</div>
    <div v-if="mastered.length" class="card" style="padding: 8px 16px">
      <div
        v-for="l in mastered"
        :key="l.id"
        style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border)"
      >
        <span style="font-size: 14px">{{ l.title }}</span>
        <span class="muted">{{ l.moduleName }}</span>
      </div>
    </div>
    <div v-else class="card empty">还没有已掌握的课程，加油！</div>
  </div>
</template>
