/**
 * 根据课程数据自动生成轻量元信息（src/data/meta.js）。
 * 元信息只含 id/title/summary/minutes/quizCount，用于首屏同步渲染；
 * 完整课程内容（sections + 题库）通过动态 import 按需加载。
 *
 * 用法：node scripts/genmeta.mjs（npm run build 前会自动执行）
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const moduleIds = ['html5', 'css3', 'js', 'es6', 'browser', 'ts', 'vue3', 'git', 'coding']

const meta = {}
let lessonCount = 0
let quizCount = 0

for (const id of moduleIds) {
  const mod = await import(pathToFileURL(join(root, 'src/data/lessons', `${id}.js`)).href)
  meta[id] = mod.default.map((l) => ({
    id: l.id,
    title: l.title,
    summary: l.summary,
    minutes: l.minutes,
    quizCount: l.quiz.length
  }))
  lessonCount += mod.default.length
  quizCount += mod.default.reduce((s, l) => s + l.quiz.length, 0)
}

const out = `// 本文件由 scripts/genmeta.mjs 自动生成，请勿手动修改
export const lessonMeta = ${JSON.stringify(meta, null, 2)}
`

writeFileSync(join(root, 'src/data/meta.js'), out, 'utf-8')
console.log(`meta.js 已生成：${moduleIds.length} 个模块，${lessonCount} 课，${quizCount} 题`)
