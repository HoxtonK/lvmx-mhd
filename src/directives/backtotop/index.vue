<template>
  <section v-show="visible" class="back-to-top" @click="handleClick">
    <div class="icon-arrow-up"></div>
    <span>顶部</span>
  </section>
</template>

<script>
export default {
  name: 'BackToTop',

  data () {
    return {
      visible: false
    }
  },

  methods: {
    handleClick () {
      this.$el.parentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 50px;
  right: 5px;
  color: #fff;
  font-size: 10px;
  .icon-arrow-up {
    width: 16px;
    height: 10px;
    margin-bottom: 4px;
    background: url("./assets/icon-arrow-up.png") no-repeat;
    background-size: 100%;
  }
}
</style>
