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
const selected = ref(null)
const answered = ref(false)
const correctCount = ref(0)

const current = computed(() => list[idx.value])
const isLast = computed(() => idx.value === list.length - 1)

function choose(i) {
  if (!answered.value) selected.value = i
}

function submit() {
  if (selected.value === null || answered.value) return
  answered.value = true
  if (selected.value === current.value.answer) correctCount.value += 1
}

function next() {
  if (isLast.value) {
    emit('finish', { correct: correctCount.value, total: list.length })
  } else {
    idx.value += 1
    selected.value = null
    answered.value = false
  }
}

function optionClass(i) {
  if (!answered.value) return { selected: selected.value === i }
  if (i === current.value.answer) return { correct: true }
  if (i === selected.value) return { wrong: true }
  return {}
}
</script>

<template>
  <div>
    <div class="muted" style="margin-bottom: 10px">
      第 {{ idx + 1 }} / {{ list.length }} 题
      <span class="tag" style="margin-left: 6px">{{ current.type === 'judge' ? '判断题' : '单选题' }}</span>
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
        {{ current.type === 'judge' ? '' : 'ABCDEFGH'[i] + '. ' }}{{ opt }}
      </button>
      <div v-if="answered" class="explain" :class="selected === current.answer ? 'ok' : 'no'">
        <b>{{ selected === current.answer ? '✅ 回答正确' : '❌ 回答错误' }}</b>
        <div style="margin-top: 4px">{{ current.explanation }}</div>
      </div>
    </div>
    <button v-if="!answered" class="btn btn-primary" :disabled="selected === null" @click="submit">
      确认答案
    </button>
    <button v-else class="btn btn-primary" @click="next">
      {{ isLast ? '查看结果' : '下一题' }}
    </button>
  </div>
</template>
