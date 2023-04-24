import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/satellite/Main.vue')
    },
    {
      path: '/wxLogin',
      name: '微信登录中转页',
      component: () => import('../views/wxLogin/main.vue')
    },
    {
      path: '/brief/detail/:key',
      name: '活动页',
      component: () => import('../views/brief/detail.vue')
    },
    {
      path: '/imgCheckIn',
      name: '图片打卡',
      component: () => import('../views/imgCheckIn/main.vue')
    },
    {
      path: '/satellite/main',
      name: '卫星介绍',
      component: () => import('../views/satellite/Main.vue')
    },
    {
      path: '/satellite/detail/:key',
      name: '卫星介绍',
      strict: true,
      component: () => import('../views/satellite/Detail.vue')
    }
  ]
})

export default router
