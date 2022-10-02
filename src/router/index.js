import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    redirect: '/monitor',
    component: () => import('../views/basic/BasicLayout.vue'),
    children: [
      {
        path: '/monitor',
        name: 'Monitor',
        component: () => import('../views/manage/Monitor.vue'),
      },
      {
        path: '/task',
        name: 'Task',
        component: () => import('../views/manage/Task.vue'),
      },
      {
        path: '/device',
        name: 'Device',
        component: () => import('../views/manage/Device.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router