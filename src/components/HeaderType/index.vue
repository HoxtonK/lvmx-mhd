<template>
  <div class="header-type">
    <div class="item active">热血</div>
    <div class="item">恋爱</div>
    <div class="item">搞笑</div>
    <div class="item">魔幻</div>
    <div class="item">悬疑</div>
    <div class="item">少儿</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderType'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.header-type {
  @include border-bottom;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  .item {
    width: 20%;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #000;
    &.active {
      color: #e7370c;
    }
  }
}
</style>
