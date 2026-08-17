<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '../composables/useStore'
import { getLesson } from '../data'
import QuizRunner from '../components/QuizRunner.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

const lesson = computed(() => getLesson(route.params.id))
if (!lesson.value) router.replace('/wrongbook')

/** 本轮重练的题目快照（indices 为原 quiz 下标） */
const practice = ref(null)
const result = ref(null)
const runnerKey = ref(0)

function startPractice() {
  const inds = [...(store.state.wrong[lesson.value.id]?.indices || [])]
  if (!inds.length) {
    practice.value = null
    return
  }
  practice.value = { inds, questions: inds.map((i) => lesson.value.quiz[i]) }
  result.value = null
  runnerKey.value += 1
}

startPractice()

function onFinish({ correct, total, wrong }) {
  // wrong 是本轮 questions 数组内的位置下标，映射回原 quiz 下标
  const cleared = practice.value.inds.filter((_, i) => !wrong.includes(i))
  store.clearWrong(lesson.value.id, cleared)
  result.value = { correct, total, cleared: cleared.length }
}

const remaining = computed(() => store.state.wrong[lesson.value.id]?.indices.length || 0)
</script>

<template>
  <div class="page" v-if="lesson">
    <div class="section-title" style="margin-top: 4px">🎯 错题重练：{{ lesson.title }}</div>

    <QuizRunner
      v-if="practice && !result"
      :key="runnerKey"
      :questions="practice.questions"
      @finish="onFinish"
    />

    <div v-else-if="result" class="card result-card">
      <div class="emoji">{{ remaining === 0 ? '🎉' : '💪' }}</div>
      <h3>{{ remaining === 0 ? '本课错题全部清零！' : '继续加油' }}</h3>
      <p class="muted">答对 {{ result.correct }} / {{ result.total }} 题，移出错题本 {{ result.cleared }} 道</p>
      <p v-if="remaining > 0" class="muted" style="margin-top: 6px">还剩 {{ remaining }} 道错题</p>
      <div class="actions">
        <button v-if="remaining > 0" class="btn btn-primary" @click="startPractice">继续重练剩余错题</button>
        <router-link to="/wrongbook" class="btn btn-outline">返回错题本</router-link>
        <router-link :to="`/lesson/${lesson.id}`" class="btn btn-ghost">回看课程内容</router-link>
      </div>
    </div>

    <div v-else class="card empty">
      🎉 本课没有错题了
      <div style="margin-top: 14px">
        <router-link to="/wrongbook" class="btn btn-primary">返回错题本</router-link>
      </div>
    </div>
  </div>
</template>
