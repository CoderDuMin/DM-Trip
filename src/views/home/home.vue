<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home'

// 网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()

</script>

<style scoped lang="less">
.banner{
  img{
    width:100%;
  }
}

</style>