<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
    <HomeCategory />
    <HomeContent />
    <button @click="getMore">获取数据</button>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategory from './cpns/home-category.vue'
import HomeContent from './cpns/home-content.vue'

// 网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoryData()
homeStore.fetchHouseList()

const getMore = () => {
  homeStore.fetchHouseList()
}

</script>

<style scoped lang="less">
.home{
  padding-bottom: 50px;
}
.banner{
  img{
    width:100%;
  }
}

</style>