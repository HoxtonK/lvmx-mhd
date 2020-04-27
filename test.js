// ? 问题 ？
// 为什么 Vue.use(lvmx, {}) 调用 lvmx.install 。而 install 接收的参数与传递的参数不是一一对应的关系

// 一句话描述，
// 你听我这边说调用之后进入到某个函数里面了。其实底层代码中有个中间层

// 底层 Vue
class Vue {

}

Vue.use = (pluginName, options) => {
  pluginName.install(Vue, options)
}

// ================

const lvmx = {
  install (Vue, options) {

  }
}

Vue.use(lvmx, {})
