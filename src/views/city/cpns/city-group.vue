<template>
   <div class="city-list">
        <van-index-bar :index-list="indexList">
          <van-index-anchor index="热门" />
          <div class="hot-tags">
            <div class="tag" 
                 v-for="hot in groupData?.hotCities" 
                 @click="cityClick(hot)"
                :key="hot.cityId" >{{ hot.cityName }}</div>
          </div>
          <template v-for="(item,index) in groupData?.cities">
            <van-index-anchor :index="item.group"  />
            <van-cell v-for="city in item.cities" :key="city.cityId" :title="city.cityName" @click="cityClick(city)" />
          </template>
        </van-index-bar>
   </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue'
import { useRouter } from 'vue-router';

// 引入路由对象
const router = useRouter()
// 引入cityStore
const cityStore = useCityStore()

// 定义props
const props = defineProps({
  groupData:{
    type:Object,
    default:() => ({})
  }
})

// 自定义索引导航
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

// 定义城市选择时间
const cityClick = (city) => {
  // 变更当前城市
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}
</script>

<style scoped lang="less">
.hots{
  padding: 0 16px;
  .title{
    font-size: 15px;
    margin: 10px 0;
  }

}
.hot-tags{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 24px;
    .tag{
      width: 70px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      background-color: #FFF2EE;
      border-radius: 14px;
      margin: 6px 0;
    }
  }
</style>