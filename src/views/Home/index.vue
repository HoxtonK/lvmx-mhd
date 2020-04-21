<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 首页头部 end -->

    <Swiper class="my-swiper" @change="onChange">
      <SwiperItem>
        1
      </SwiperItem>
      <SwiperItem>
        2
      </SwiperItem>
      <SwiperItem>
        3
      </SwiperItem>
    </Swiper>

    <Swiper class="my-swiper" @change="onChange">
      <SwiperItem>
        1
      </SwiperItem>
      <SwiperItem>
        2
      </SwiperItem>
      <SwiperItem>
        3
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
// 使用 ../ 相对路径时，如果当前组件位置发生变化，
// 那么相对路径也需要去修改, 如果使用 @ 别名的方式。就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// =>
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem
  },

  methods: {
    onChange (index) {
      console.log('hello', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/user-btn.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../assets/logo.png") no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/search.png") no-repeat;
      background-size: 100%;
    }
  }

  .my-swiper img {
    width: 100%;
  }
}
</style>
