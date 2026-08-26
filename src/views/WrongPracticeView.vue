<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { useStore } from '../composables/useStore'
import { getLesson, loadLessonFull } from '../data'
import QuizRunner from '../components/QuizRunner.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

const lesson = ref(getLesson(route.params.id))
if (!lesson.value) router.replace('/wrongbook')

/** 本轮重练的题目快照（indices 为原 quiz 下标） */
const practice = ref(null)
const result = ref(null)
const runnerKey = ref(0)

/** 中途退出确认：重练未完成时退出不影响错题本 */
onBeforeRouteLeave(() => {
  if (practice.value && !result.value) {
    return window.confirm('错题重练还未完成，现在退出不会清除任何错题。确定退出吗？')
  }
})

onMounted(async () => {
  const full = await loadLessonFull(route.params.id)
  if (full) lesson.value = full
  startPractice()
})

function startPractice() {
  if (!lesson.value.quiz) return
  const inds = [...(store.state.wrong[lesson.value.id]?.indices || [])]
  if (!inds.length) {
    practice.value = null
    return
  }
  practice.value = { inds, questions: inds.map((i) => lesson.value.quiz[i]) }
  result.value = null
  runnerKey.value += 1
}

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

    <div v-else-if="!lesson.quiz" class="card empty">📝 题目加载中…</div>

    <div v-else class="card empty">
      🎉 本课没有错题了
      <div style="margin-top: 14px">
        <router-link to="/wrongbook" class="btn btn-primary">返回错题本</router-link>
      </div>
    </div>
  </div>
</template>
