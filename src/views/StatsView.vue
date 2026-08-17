<script setup>
import { computed, ref } from 'vue'
import { useStore } from '../composables/useStore'
import { allLessons, modules } from '../data'
import { formatCN } from '../utils/date'

const store = useStore()
const s = computed(() => store.stats(allLessons))
const week = computed(() => store.last7Days())
const maxCount = computed(() => Math.max(1, ...week.value.map((d) => d.count)))

function moduleProgress(m) {
  const learned = m.lessons.filter((l) => store.isLearned(l.id)).length
  return { learned, total: m.lessons.length, pct: Math.round((learned / m.lessons.length) * 100) }
}

const confirmReset = ref(false)
function doReset() {
  store.resetAll()
  confirmReset.value = false
}
</script>

<template>
  <div class="page">
    <div class="section-title" style="margin-top: 4px">📊 学习统计</div>

    <div class="stat-grid">
      <div class="stat-cell">
        <div class="num">{{ s.streak }}</div>
        <div class="label">连续学习(天)</div>
      </div>
      <div class="stat-cell">
        <div class="num">{{ s.learned }}/{{ s.total }}</div>
        <div class="label">已学课程</div>
      </div>
      <div class="stat-cell">
        <div class="num">{{ s.mastered }}</div>
        <div class="label">已掌握课程</div>
      </div>
      <div class="stat-cell">
        <div class="num">{{ s.reviewPassRate }}%</div>
        <div class="label">复习通过率（{{ s.reviewCount }} 次）</div>
      </div>
    </div>

    <div class="section-title">📈 近 7 天学习量</div>
    <div class="card">
      <div class="bar-chart">
        <div v-for="d in week" :key="d.date" class="bar">
          <i :style="{ height: (d.count / maxCount) * 100 + '%', opacity: d.count ? 1 : 0.25 }"></i>
          <span>{{ formatCN(d.date) }}</span>
        </div>
      </div>
      <p class="muted" style="text-align: center; margin-top: 8px">累计活跃 {{ s.activeDays }} 天</p>
    </div>

    <div class="section-title">🗂 各模块进度</div>
    <div v-for="m in modules" :key="m.id" class="card">
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
        <b>{{ m.icon }} {{ m.name }}</b>
        <span class="muted">{{ moduleProgress(m).learned }}/{{ moduleProgress(m).total }}</span>
      </div>
      <div class="progress">
        <i :style="{ width: moduleProgress(m).pct + '%', background: m.color }"></i>
      </div>
    </div>

    <div class="section-title">⚙️ 设置</div>
    <div class="card">
      <template v-if="!confirmReset">
        <button class="btn btn-outline" style="border-color: var(--danger); color: var(--danger)" @click="confirmReset = true">
          清空全部学习数据
        </button>
      </template>
      <template v-else>
        <p style="margin-bottom: 10px; color: var(--danger)">确定要清空所有学习进度吗？此操作不可恢复！</p>
        <button class="btn btn-primary" style="background: var(--danger)" @click="doReset">确认清空</button>
        <button class="btn btn-ghost" @click="confirmReset = false">取消</button>
      </template>
    </div>
  </div>
</template>
