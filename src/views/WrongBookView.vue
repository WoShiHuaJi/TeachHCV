<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'
import { getLesson } from '../data'
import { formatCN } from '../utils/date'

const store = useStore()

/** 有错题的课程列表，按错题数降序 */
const wrongLessons = computed(() =>
  Object.entries(store.state.wrong)
    .map(([lessonId, w]) => ({ lesson: getLesson(lessonId), ...w }))
    .filter((x) => x.lesson)
    .sort((a, b) => b.indices.length - a.indices.length)
)

const total = computed(() => store.wrongCount())
</script>

<template>
  <div class="page">
    <div class="section-title" style="margin-top: 4px">
      📌 错题本
      <span v-if="total" class="badge">{{ total }}</span>
    </div>
    <p class="muted" style="margin-bottom: 12px">
      答错和标「不知道」的题会自动收进来，重练答对后自动移出。
    </p>

    <template v-if="wrongLessons.length">
      <router-link
        v-for="w in wrongLessons"
        :key="w.lesson.id"
        :to="`/wrongbook/${w.lesson.id}`"
        class="lesson-item"
      >
        <span class="dot" :style="{ background: w.lesson.moduleColor }"></span>
        <div class="info">
          <div class="title">{{ w.lesson.title }}</div>
          <div class="sub">{{ w.lesson.moduleName }} · {{ w.indices.length }} 道错题 · 最近 {{ formatCN(w.lastDate) }}</div>
        </div>
        <span class="arrow">›</span>
      </router-link>
    </template>
    <div v-else class="card empty">🎉 没有错题，继续保持！</div>
  </div>
</template>
