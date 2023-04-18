import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/wxLogin',
      name: '微信登录中转页',
      component: () => import('../views/wxLogin/main.vue')
    },
    {
      path: '/brief/detail/:key',
      name: '活动页',
      component: () => import('../views/brief/detail.vue')
    }
  ]
})

export default router
