<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore, REVIEW_INTERVALS } from '../composables/useStore'
import { getLesson } from '../data'
import { formatCN } from '../utils/date'

const route = useRoute()
const router = useRouter()
const store = useStore()

const lesson = computed(() => getLesson(route.params.id))
const rec = computed(() => store.lessonState(route.params.id))

if (!lesson.value) router.replace('/modules')

function paragraphs(text) {
  return text.split('\n').filter((s) => s.trim())
}
</script>

<template>
  <div class="page" v-if="lesson">
    <div class="lesson-head">
      <span class="tag" :style="{ background: lesson.moduleColor + '1a', color: lesson.moduleColor }">
        {{ lesson.moduleName }}
      </span>
      <h2>{{ lesson.title }}</h2>
      <p class="muted">约 {{ lesson.minutes }} 分钟 · 题库 {{ lesson.quiz.length }} 题，每次随机抽题测试</p>
    </div>

    <div v-for="(sec, i) in lesson.sections" :key="i" class="card reading">
      <h3>{{ sec.heading }}</h3>
      <p v-for="(p, j) in paragraphs(sec.text)" :key="j">{{ p }}</p>
      <pre v-if="sec.code" class="code"><code>{{ sec.code }}</code></pre>
    </div>

    <!-- 已学信息 -->
    <div v-if="rec" class="notice notice-info">
      <b>📅 复习计划（艾宾浩斯曲线：{{ REVIEW_INTERVALS.join('/') }} 天）</b>
      <p class="muted" style="margin-top: 6px">
        已完成 {{ rec.reviewHistory.length }} 次复习 ·
        <template v-if="rec.mastered">🎓 已完成全部复习，已掌握！</template>
        <template v-else>下次复习：{{ formatCN(rec.nextReviewDate) }}</template>
      </p>
    </div>

    <router-link :to="`/quiz/${lesson.id}`" class="btn btn-primary" style="margin-top: 8px">
      {{ rec ? '重新测试' : '完成学习，开始测试 ✍️' }}
    </router-link>
    <button class="btn btn-ghost" @click="router.back()">返回</button>
  </div>
</template>
