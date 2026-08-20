import { lessonMeta } from './meta'

/**
 * 数据入口（懒加载版）：
 * - modules / allLessons / getLesson 等同步 API 只使用轻量元信息（标题、简介、题数），
 *   首屏无需加载完整课程内容；
 * - 完整课程内容（sections + 题库）通过 loadLessonFull 按模块动态 import，
 *   浏览器会自动缓存已加载的模块 chunk。
 */

export const modules = [
  { id: 'html5', name: 'HTML5', desc: '网页的骨架：结构与语义', icon: '🦴', color: '#e34f26' },
  { id: 'css3', name: 'CSS3', desc: '网页的外衣：样式与布局', icon: '🎨', color: '#2965f1' },
  { id: 'js', name: 'JavaScript', desc: '网页的灵魂：交互与逻辑', icon: '⚡', color: '#d4b106' },
  { id: 'es6', name: 'ES6+', desc: '现代 JavaScript 语法', icon: '🚀', color: '#0ea5e9' },
  { id: 'browser', name: '浏览器与网络', desc: '面试必考：渲染、事件循环、HTTP', icon: '🌐', color: '#7c3aed' },
  { id: 'ts', name: 'TypeScript', desc: '带类型的 JavaScript', icon: '🔷', color: '#3178c6' },
  { id: 'vue3', name: 'Vue3', desc: '渐进式前端框架', icon: '💚', color: '#42b883' },
  { id: 'git', name: 'Git', desc: '版本控制与团队协作', icon: '🌿', color: '#f05033' },
  { id: 'coding', name: '手写题精讲', desc: '面试手写代码题逐行精讲', icon: '✍️', color: '#e11d48' }
]

for (const m of modules) {
  m.lessons = (lessonMeta[m.id] || []).map((l) => ({
    ...l,
    module: m.id,
    moduleName: m.name,
    moduleColor: m.color
  }))
}

/** 全部课程的轻量元信息（数组顺序即学习顺序） */
export const allLessons = modules.flatMap((m) => m.lessons)

const lessonMap = new Map(allLessons.map((l) => [l.id, l]))

/** 同步获取课程元信息（无 sections/quiz 内容） */
export function getLesson(id) {
  return lessonMap.get(id) || null
}

export function getModule(id) {
  return modules.find((m) => m.id === id) || null
}

/** 课程的下一课（按全局学习顺序），没有则返回 null */
export function getNextLesson(id) {
  const i = allLessons.findIndex((l) => l.id === id)
  return i >= 0 && i < allLessons.length - 1 ? allLessons[i + 1] : null
}

/* ===== 完整内容的按需加载 ===== */
const loaders = {
  html5: () => import('./lessons/html5.js'),
  css3: () => import('./lessons/css3.js'),
  js: () => import('./lessons/js.js'),
  es6: () => import('./lessons/es6.js'),
  browser: () => import('./lessons/browser.js'),
  ts: () => import('./lessons/ts.js'),
  vue3: () => import('./lessons/vue3.js'),
  git: () => import('./lessons/git.js'),
  coding: () => import('./lessons/coding.js')
}

const fullCache = new Map()

/** 异步加载课程完整内容（含 sections 和 quiz 题库），带缓存 */
export async function loadLessonFull(id) {
  const stub = lessonMap.get(id)
  if (!stub) return null
  if (fullCache.has(id)) return fullCache.get(id)
  const mod = await loaders[stub.module]()
  const full = mod.default.find((l) => l.id === id)
  if (!full) return null
  // 注意顺序：stub 在前，保留 quizCount 等元信息字段
  const merged = { ...stub, ...full }
  fullCache.set(id, merged)
  return merged
}
