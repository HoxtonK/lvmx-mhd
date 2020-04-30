<template>
  <nav class="index-nav">
    <router-link to="/classify">
      <div class="nav-item">
        <!-- <i class="iconfont icon-icon_addmessage"></i> -->
        <div class="nav-pic pic-1"></div>
        <p class="nav-text font-24">分类</p>
      </div>
    </router-link>
    <router-link to="/ranking">
      <div class="nav-item">
        <!-- <i class="iconfont icon-icon_addresslist"></i> -->
        <div class="nav-pic pic-2"></div>
        <p class="nav-text font-24">排行</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div class="nav-item">
        <!-- <i class="iconfont icon-icon_addressbook"></i> -->
        <div class="nav-pic pic-3"></div>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </router-link>
    <router-link to="/hello/history">
      <div class="nav-item">
        <!-- <i class="iconfont icon-icon_at"></i> -->
        <div class="nav-pic pic-4"></div>
        <p class="nav-text font-24">历史</p>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'IndexNav'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.index-nav {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  .nav-item {
    .iconfont {
      font-size: 52px;
      line-height: 1.2;
    }
    .nav-pic {
      width: 54px;
      height: 54px;
      &.pic-1 {
        background: url("../../../assets/icon/nav-pic-1.png") no-repeat;
        background-size: 100%;
      }
      &.pic-2 {
        background: url("../../../assets/icon/nav-pic-2.png") no-repeat;
        background-size: 100%;
      }
      &.pic-3 {
        background: url("../../../assets/icon/nav-pic-3.png") no-repeat;
        background-size: 100%;
      }
      &.pic-4 {
        background: url("../../../assets/icon/nav-pic-4.png") no-repeat;
        background-size: 100%;
      }
    }
    .nav-text {
      color: #8d8d8d;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
