import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import store from './store'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
