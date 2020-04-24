<template>
  <div id="app">
    <!-- 路由切换动画时，入场动画与出场动画一样 -->
    <!-- <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
      mode="in-out"
    >
      <router-view />
    </transition>-->

    <!--
      需求：
        1. 分类页，入场使用 slideInRight
                  出场使用 slideOutRight

        2. 排行榜页面，入场使用 slideInDown
                      出场使用 slideOutUp

      需求尝试一：
        单独在具体的页面组中去做。具体的页面效果出来，但是我需要他们出现的时候，首页还能看到。
        这时考虑使用 多元素/多组件的过渡动画

      需求尝试二：
        1. 设置过渡模式为 in-out
    -->
    <transition
      mode="in-out"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      mode: 'in-out'
    }
  }
  // watch: {
  //   $route (to, from) {
  //     console.log(to)
  //     if (to.path === '/home') {
  //       console.log(to)
  //       this.mode = ''
  //     } else {
  //       this.mode = 'in-out'
  //     }
  //   }
  // }
}
</script>
