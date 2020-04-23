import Vue from 'vue'
import Index from './index.vue'

const IndexConstructor = Vue.extend(Index)

const install = (Vue) => {
  Vue.directive('backtotop', {
    bind (el) {
      const instance = new IndexConstructor()
      instance.$mount()
      el.appendChild(instance.$el)
      el.addEventListener('scroll', () => {
        if (el.scrollTop >= el.clientHeight) {
          instance.visible = true
        } else {
          instance.visible = false
        }
      })
    }
  })
}

export default {
  install
}
