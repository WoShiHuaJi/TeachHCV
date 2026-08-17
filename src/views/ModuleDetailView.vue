<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../composables/useStore'
import { getModule } from '../data'

const route = useRoute()
const store = useStore()
const mod = computed(() => getModule(route.params.moduleId))
</script>

<template>
  <div class="page" v-if="mod">
    <div class="section-title" style="margin-top: 4px">{{ mod.icon }} {{ mod.name }}</div>
    <p class="muted" style="margin-bottom: 12px">{{ mod.desc }} · 共 {{ mod.lessons.length }} 课</p>
    <router-link
      v-for="(l, i) in mod.lessons"
      :key="l.id"
      :to="`/lesson/${l.id}`"
      class="lesson-item"
      :class="{ done: store.isLearned(l.id) }"
    >
      <span class="status-icon">{{ store.isLearned(l.id) ? '✅' : '🔘' }}</span>
      <div class="info">
        <div class="title">{{ i + 1 }}. {{ l.title }}</div>
        <div class="sub">{{ l.summary }} · 约 {{ l.minutes }} 分钟</div>
      </div>
      <span class="arrow">›</span>
    </router-link>
  </div>
</template>
