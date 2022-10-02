import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/core/element'
import user from './store/user'

Vue.config.productionTip = false

// router.beforeEach((to,from,next) => {
//   store.commit('getToken')
//   const token = user.token
//   if(!token && to.name !== 'Login' ){
//     next({name: 'Login'})
//   } else {
//     next()
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
