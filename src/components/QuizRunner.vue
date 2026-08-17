<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  questions: { type: Array, required: true },
  shuffle: { type: Boolean, default: true }
})
const emit = defineEmits(['finish'])

function shuffleArr(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** 答题顺序（存题目在 questions 中的原始下标），错题上报用原始下标 */
const order = props.questions.map((_, i) => i)
if (props.shuffle) shuffleArr(order)

const idx = ref(0)
const selected = ref([]) // 已选下标数组，单选/判断时长度恒为 1
const answered = ref(false)
const isCurrentCorrect = ref(false)
const gaveUp = ref(false) // 本题点了「不知道」
const correctCount = ref(0)
const wrongList = [] // 答错/不会的题的原始下标

const current = computed(() => props.questions[order[idx.value]])
const isLast = computed(() => idx.value === order.length - 1)
const isMulti = computed(() => current.value.type === 'multiple')
const answerArr = computed(() =>
  Array.isArray(current.value.answer) ? current.value.answer : [current.value.answer]
)
const typeLabel = computed(() => {
  if (current.value.type === 'judge') return '判断题'
  if (current.value.type === 'multiple') return '多选题'
  return '单选题'
})

function choose(i) {
  if (answered.value) return
  if (isMulti.value) {
    selected.value = selected.value.includes(i)
      ? selected.value.filter((x) => x !== i)
      : [...selected.value, i]
  } else {
    selected.value = [i]
  }
}

function submit() {
  if (selected.value.length === 0 || answered.value) return
  answered.value = true
  // 多选必须完全选对才得分
  const ok =
    selected.value.length === answerArr.value.length &&
    selected.value.every((i) => answerArr.value.includes(i))
  isCurrentCorrect.value = ok
  if (ok) {
    correctCount.value += 1
  } else {
    wrongList.push(order[idx.value])
  }
}

/** 「不知道」：诚实标记为不会，按答错处理并展示解析 */
function giveUp() {
  if (answered.value) return
  answered.value = true
  gaveUp.value = true
  isCurrentCorrect.value = false
  wrongList.push(order[idx.value])
}

function next() {
  if (isLast.value) {
    emit('finish', { correct: correctCount.value, total: order.length, wrong: [...wrongList] })
  } else {
    idx.value += 1
    selected.value = []
    answered.value = false
    isCurrentCorrect.value = false
    gaveUp.value = false
  }
}

function optionClass(i) {
  if (!answered.value) return { selected: selected.value.includes(i) }
  if (answerArr.value.includes(i)) return { correct: true }
  if (selected.value.includes(i)) return { wrong: true }
  return {}
}
</script>

<template>
  <div>
    <div class="quiz-meta muted">
      第 {{ idx + 1 }} / {{ order.length }} 题
      <span class="tag">{{ typeLabel }}</span>
      <span v-if="isMulti">（选对全部才得分）</span>
    </div>
    <div class="card">
      <div class="quiz-question">{{ current.question }}</div>
      <button
        v-for="(opt, i) in current.options"
        :key="i"
        class="quiz-option"
        :class="optionClass(i)"
        @click="choose(i)"
      >
        <span v-if="isMulti" style="margin-right: 6px">{{ selected.includes(i) ? '☑' : '☐' }}</span>
        {{ current.type === 'judge' ? '' : 'ABCDEFGH'[i] + '. ' }}{{ opt }}
      </button>
      <div v-if="answered" class="explain" :class="isCurrentCorrect ? 'ok' : 'no'">
        <b>{{ gaveUp ? '🤷 已标记为不会（计入错题）' : isCurrentCorrect ? '✅ 回答正确' : '❌ 回答错误' }}</b>
        <div style="margin-top: 4px">{{ current.explanation }}</div>
      </div>
    </div>
    <template v-if="!answered">
      <button class="btn btn-primary" :disabled="selected.length === 0" @click="submit">确认答案</button>
      <button class="btn btn-ghost" @click="giveUp">🤷 不知道（看解析，计入错题）</button>
    </template>
    <button v-else class="btn btn-primary" @click="next">
      {{ isLast ? '查看结果' : '下一题' }}
    </button>
  </div>
</template>
