import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/layout',
    children: [
      { path: '/layout', component: () => import('@/views/home') },
      {
        path: '/layout/selectHome',
        component: () => import('@/views/selectHome')
      },
      {
        path: '/layout/real-time-info',
        component: () => import('@/views/real-time-info')
      },
      {
        path: '/layout/my',
        component: () => import('@/views/My')
      }
    ]
  },
  { path: '/login', component: () => import('@/views/My/login') }
]

const router = new VueRouter({
  routes
})

export default router
