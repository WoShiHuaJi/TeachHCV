import html5 from './lessons/html5'
import css3 from './lessons/css3'
import js from './lessons/js'
import es6 from './lessons/es6'
import browser from './lessons/browser'
import ts from './lessons/ts'
import vue3 from './lessons/vue3'
import git from './lessons/git'
import coding from './lessons/coding'

/** 学习模块（数组顺序即学习顺序） */
export const modules = [
  { id: 'html5', name: 'HTML5', desc: '网页的骨架：结构与语义', icon: '🦴', color: '#e34f26', lessons: html5 },
  { id: 'css3', name: 'CSS3', desc: '网页的外衣：样式与布局', icon: '🎨', color: '#2965f1', lessons: css3 },
  { id: 'js', name: 'JavaScript', desc: '网页的灵魂：交互与逻辑', icon: '⚡', color: '#d4b106', lessons: js },
  { id: 'es6', name: 'ES6+', desc: '现代 JavaScript 语法', icon: '🚀', color: '#0ea5e9', lessons: es6 },
  { id: 'browser', name: '浏览器与网络', desc: '面试必考：渲染、事件循环、HTTP', icon: '🌐', color: '#7c3aed', lessons: browser },
  { id: 'ts', name: 'TypeScript', desc: '带类型的 JavaScript', icon: '🔷', color: '#3178c6', lessons: ts },
  { id: 'vue3', name: 'Vue3', desc: '渐进式前端框架', icon: '💚', color: '#42b883', lessons: vue3 },
  { id: 'git', name: 'Git', desc: '版本控制与团队协作', icon: '🌿', color: '#f05033', lessons: git },
  { id: 'coding', name: '手写题精讲', desc: '面试手写代码题逐行精讲', icon: '✍️', color: '#e11d48', lessons: coding }
]

/** 全部课程（按模块顺序展开），每课附加 module / moduleName 字段 */
export const allLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, module: m.id, moduleName: m.name, moduleColor: m.color }))
)

const lessonMap = new Map(allLessons.map((l) => [l.id, l]))

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
