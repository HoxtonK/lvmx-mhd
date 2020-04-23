import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import VueBacktotop from './directives/backtotop'

import './assets/styles/base.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preload: 1.3,
  error: require('./assets/logo.png'),
  loading: require('./assets/logo.png'),
  attempt: 1
})

Vue.use(VueBacktotop)

// 全局定义一个过滤器。formatYi
// Vue.filter('formatYi', (value) => {
//   console.log('value: ', value)
//   return `${value}亿`
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
