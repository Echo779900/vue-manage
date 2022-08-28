import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '../layout/BasicLayout.vue'
import UserLayout from '../layout/UserLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Login",
    component: UserLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/user/UserLogin.vue')
      }
    ]
  },
  {
    path: '/index',
    name: 'Index',
    component: BasicLayout,
    children: [
      {
        
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
