<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
    <div class="search-bar" v-show="isShowSearchBar">我是搜索栏红红火火恍恍惚惚</div>
    <HomeCategory />
    <HomeContent />
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategory from './cpns/home-category.vue'
import HomeContent from './cpns/home-content.vue'
import useScroll from '@/hooks/useScroll';
import { computed, watch } from 'vue';

// 网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoryData()
homeStore.fetchHouseList()

// 监听页面滚动
const {scrollTop,isReachBottom} = useScroll()
watch(isReachBottom,(newValue) => {
  if(newValue){ 
    homeStore.fetchHouseList().then(()=>{
      isReachBottom.value = false
    })
  }
})
const isShowSearchBar = computed(() => {
  return scrollTop.value > 100
})

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