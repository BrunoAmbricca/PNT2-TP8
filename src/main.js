import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './form'
import { router } from './router'
import store from './store'
import './axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
