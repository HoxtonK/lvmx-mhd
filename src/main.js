import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import VueLvmx from './plugins/lvmx'

import './assets/styles/base.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preload: 1.3,
  error: require('./assets/logo.png'),
  loading: require('./assets/logo.png'),
  attempt: 1
})
Vue.use(VueLvmx)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
