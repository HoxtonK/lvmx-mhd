<template>
  <div class="page-classify">
    <normal-header></normal-header>

    <header-type></header-type>

    <div class="classify-main">
      <cartoon-list></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
