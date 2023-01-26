<template>
  <div class="home" ref="homeRef">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox />
    <div class="search-bar" v-show="isShowSearchBar">
      <SearchBar />
    </div>
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
import SearchBar from '@/components/search-bar/search-bar.vue'
import useScroll from '@/hooks/useScroll';
import { computed, watch,ref, onActivated } from 'vue';

// 网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoryData()
homeStore.fetchHouseList()

// 监听页面滚动
const homeRef = ref()
const {scrollTop,isReachBottom} = useScroll(homeRef)
watch(isReachBottom,(newValue) => {
  if(newValue){ 
    homeStore.fetchHouseList().then(()=>{
      isReachBottom.value = false
    })
  }
})
const isShowSearchBar = computed(() => {
  return scrollTop.value > 390
})

onActivated(() => {
  console.log(homeRef.value)
  homeRef.value?.scrollTo({
    top:scrollTop.value,
  })
})

</script>

<style scoped lang="less">
.home{
  padding-bottom: 50px;
  height: 100vh;
  overflow-y: auto;
}
.banner{
  img{
    width:100%;
  }
}
.search-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 9;
  padding: 16px 10px 10px;
}

</style>