<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './components/BottomNav.vue'
import { todayStr } from './utils/date'

const route = useRoute()
const dateText = computed(() => {
  const [y, m, d] = todayStr().split('-')
  const week = ['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]
  return `${y}年${Number(m)}月${Number(d)}日 星期${week}`
})
const showHeader = computed(() => route.name === 'home')
</script>

<template>
  <header v-if="showHeader" class="app-header">
    <h1>📚 前端学习</h1>
    <div class="sub">{{ dateText }} · HTML5 / CSS3 / JS / ES6 / Vue3</div>
  </header>
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="route.fullPath" />
  </router-view>
  <BottomNav />
</template>
