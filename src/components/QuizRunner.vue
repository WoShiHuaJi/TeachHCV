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

const list = props.shuffle ? shuffleArr(props.questions) : props.questions
const idx = ref(0)
const selected = ref([]) // 已选下标数组，单选/判断时长度恒为 1
const answered = ref(false)
const isCurrentCorrect = ref(false)
const correctCount = ref(0)

const current = computed(() => list[idx.value])
const isLast = computed(() => idx.value === list.length - 1)
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
  if (ok) correctCount.value += 1
}

function next() {
  if (isLast.value) {
    emit('finish', { correct: correctCount.value, total: list.length })
  } else {
    idx.value += 1
    selected.value = []
    answered.value = false
    isCurrentCorrect.value = false
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
    <div class="muted" style="margin-bottom: 10px">
      第 {{ idx + 1 }} / {{ list.length }} 题
      <span class="tag" style="margin-left: 6px">{{ typeLabel }}</span>
      <span v-if="isMulti" class="muted">（选对全部才得分）</span>
    </div>
    <div class="card">
      <div style="font-size: 16px; font-weight: 600; margin-bottom: 14px">{{ current.question }}</div>
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
        <b>{{ isCurrentCorrect ? '✅ 回答正确' : '❌ 回答错误' }}</b>
        <div style="margin-top: 4px">{{ current.explanation }}</div>
      </div>
    </div>
    <button v-if="!answered" class="btn btn-primary" :disabled="selected.length === 0" @click="submit">
      确认答案
    </button>
    <button v-else class="btn btn-primary" @click="next">
      {{ isLast ? '查看结果' : '下一题' }}
    </button>
  </div>
</template>
