import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: '今日学习' } },
  { path: '/modules', name: 'modules', component: () => import('../views/ModulesView.vue'), meta: { title: '全部课程' } },
  { path: '/modules/:moduleId', name: 'module-detail', component: () => import('../views/ModuleDetailView.vue'), meta: { title: '课程列表' } },
  { path: '/lesson/:id', name: 'lesson', component: () => import('../views/LessonView.vue'), meta: { title: '课程详情' } },
  { path: '/quiz/:id', name: 'quiz', component: () => import('../views/QuizView.vue'), meta: { title: '学习测试' } },
  { path: '/review', name: 'review', component: () => import('../views/ReviewView.vue'), meta: { title: '复习中心' } },
  { path: '/review/:id', name: 'review-quiz', component: () => import('../views/QuizView.vue'), meta: { title: '复习测试' } },
  { path: '/wrongbook', name: 'wrongbook', component: () => import('../views/WrongBookView.vue'), meta: { title: '错题本' } },
  { path: '/wrongbook/:id', name: 'wrong-practice', component: () => import('../views/WrongPracticeView.vue'), meta: { title: '错题重练' } },
  { path: '/stats', name: 'stats', component: () => import('../views/StatsView.vue'), meta: { title: '学习统计' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  document.title = (to.meta.title ? to.meta.title + ' · ' : '') + '前端学习'
})

export default router
