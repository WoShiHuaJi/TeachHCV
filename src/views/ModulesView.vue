<script setup>
import { useStore } from '../composables/useStore'
import { modules } from '../data'

const store = useStore()

function progress(m) {
  const learned = m.lessons.filter((l) => store.isLearned(l.id)).length
  return { learned, total: m.lessons.length, pct: Math.round((learned / m.lessons.length) * 100) }
}
</script>

<template>
  <div class="page">
    <div class="section-title" style="margin-top: 4px">📚 全部课程</div>
    <router-link
      v-for="m in modules"
      :key="m.id"
      :to="`/modules/${m.id}`"
      class="card module-card"
    >
      <div class="flex" style="margin-bottom: 10px">
        <span style="font-size: 28px">{{ m.icon }}</span>
        <div class="grow">
          <b style="font-size: 16px">{{ m.name }}</b>
          <div class="muted">{{ m.desc }}</div>
        </div>
        <span class="tag">{{ progress(m).learned }}/{{ progress(m).total }}</span>
      </div>
      <div class="progress">
        <i :style="{ width: progress(m).pct + '%', background: m.color }"></i>
      </div>
    </router-link>
  </div>
</template>
