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
  { path: '/login', component: () => import('@/views/My/login') },
  { path: '/rent', component: () => import('@/views/rent') },
  { path: '/favorate', component: () => import('@/views/favorate') },
  { path: '/city', component: () => import('@/views/city') }
]

const router = new VueRouter({
  routes
})
// 处理控制台报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}

export default router
