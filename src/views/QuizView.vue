<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore, PASS_RATE } from '../composables/useStore'
import { getLesson, getNextLesson } from '../data'
import QuizRunner from '../components/QuizRunner.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

/** 通过路由名区分：新课学习测试 / 复习测试 */
const isReview = computed(() => route.name === 'review-quiz')
const lesson = computed(() => getLesson(route.params.id))

const finished = ref(false)
const result = ref({ correct: 0, total: 0, pass: false })

if (!lesson.value) router.replace('/')

function onFinish({ correct, total, wrong }) {
  const pass = isReview.value
    ? store.recordReview(lesson.value.id, correct, total, wrong)
    : store.recordLearn(lesson.value.id, correct, total, wrong)
  result.value = { correct, total, pass, wrongCount: wrong ? wrong.length : 0 }
  finished.value = true
}

const nextLesson = computed(() => getNextLesson(route.params.id))

function retry() {
  finished.value = false
  result.value = { correct: 0, total: 0, pass: false }
  // 通过替换 key 强制重渲染 QuizRunner
  runnerKey.value += 1
}

const runnerKey = ref(0)
</script>

<template>
  <div class="page" v-if="lesson">
    <div class="section-title" style="margin-top: 4px">
      {{ isReview ? '🔁 复习测试' : '✍️ 学习测试' }}：{{ lesson.title }}
    </div>
    <p class="muted" style="margin-bottom: 14px">
      答对 {{ Math.ceil(lesson.quiz.length * PASS_RATE) }}/{{ lesson.quiz.length }} 题即通过
      <template v-if="!isReview">，通过后进入复习计划</template>
    </p>

    <QuizRunner v-if="!finished" :key="runnerKey" :questions="lesson.quiz" @finish="onFinish" />

    <div v-else class="card" style="text-align: center; padding: 28px 16px">
      <div style="font-size: 44px">{{ result.pass ? '🎉' : '💪' }}</div>
      <h3 style="font-size: 18px; margin: 8px 0">
        {{ result.pass ? (isReview ? '复习通过！' : '测试通过，已加入复习计划！') : '还差一点点' }}
      </h3>
      <p class="muted">
        答对 {{ result.correct }} / {{ result.total }} 题
        <template v-if="!result.pass">（正确率需达到 {{ PASS_RATE * 100 }}%）</template>
      </p>
      <p v-if="result.wrongCount > 0" class="muted" style="margin-top: 6px">
        📌 {{ result.wrongCount }} 道错题已收入「错题本」<template v-if="result.wrongCount >= 2">，本课复习间隔已自动减半</template>
      </p>
      <p v-if="!result.pass" class="muted" style="margin-top: 6px">
        {{ isReview ? '该课将重新安排到明天复习' : '建议回到课程再看一遍，然后重新测试' }}
      </p>
      <div style="margin-top: 18px">
        <button v-if="!result.pass" class="btn btn-primary" @click="retry">重新测试</button>
        <router-link
          v-if="!result.pass && !isReview"
          :to="`/lesson/${lesson.id}`"
          class="btn btn-outline"
        >
          回到课程复习
        </router-link>
        <router-link
          v-if="result.pass && !isReview && nextLesson && !store.isLearned(nextLesson.id)"
          :to="`/lesson/${nextLesson.id}`"
          class="btn btn-primary"
        >
          继续下一课：{{ nextLesson.title }}
        </router-link>
        <router-link v-if="result.pass" :to="isReview ? '/review' : '/'" class="btn btn-outline">
          {{ isReview ? '返回复习中心' : '返回首页' }}
        </router-link>
      </div>
    </div>
  </div>
</template>
