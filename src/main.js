import Vue from 'vue'
import App from './App.vue'
import router from './_router/index'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
