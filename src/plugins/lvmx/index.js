// lvmx 这块插件

import goTop from './directives/gotop'

const install = (Vue, options) => {
  // Vue => 当前的 Vue 构造器
  // options => Vue.use(插件对象, options)

  // console.log(Vue)
  // console.log(options)
  // console.log('插件被调用了')

  Vue.directive('gotop', goTop)

  // ？Vue-Router 插件能让每个组件上都有一个 $router 如何做的？
  // 绑定到原型上即可
  Vue.prototype.$lvmx = '洗脚真爽'
  // ？Vue-Router 插件能让每个组件的 data 选项中多出一个 $route 数据。如何做的
  //  mixins（混入）
  Vue.mixin({
    data () {
      return {
        $route: '123123'
      }
    }
  })
}

export default {
  install
}
