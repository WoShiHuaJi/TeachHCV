<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'
import { allLessons } from '../data'

const store = useStore()
const dueCount = computed(() => store.todayReviews(allLessons).list.length)
const wrongCount = computed(() => store.wrongCount())

const tabs = [
  { to: '/', icon: '🏠', label: '学习' },
  { to: '/modules', icon: '📖', label: '课程' },
  { to: '/review', icon: '🔁', label: '复习' },
  { to: '/wrongbook', icon: '📌', label: '错题' },
  { to: '/stats', icon: '📊', label: '统计' }
]
</script>

<template>
  <nav class="bottom-nav">
    <a
      v-for="t in tabs"
      :key="t.to"
      href="javascript:;"
      @click="$router.push(t.to)"
      :class="{ active: t.to === '/' ? $route.path === '/' : $route.path.startsWith(t.to) }"
    >
      <span class="icon-wrap"><span class="icon">{{ t.icon }}</span></span>
      <span>{{ t.label }}</span>
      <span v-if="t.to === '/review' && dueCount > 0" class="nav-badge">{{ dueCount }}</span>
      <span v-if="t.to === '/wrongbook' && wrongCount > 0" class="nav-badge">{{ wrongCount }}</span>
    </a>
  </nav>
</template>
