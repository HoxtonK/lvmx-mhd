# 开发插件

1. 给你的插件提供一个 install 方法。这个方法会自动接收到 Vue 构造器，与可选的 options
2. Vue.use(插件) 其实就是调用了 插件里面的 install 方法
