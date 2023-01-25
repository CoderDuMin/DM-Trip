<template>
   <div>
    <div class="hots">
        <div class="title">热门</div>
        <div class="hot-tags">
          <van-tag v-for="hot in groupData?.hotCities" 
                   :key="hot.cityId" 
                   size="large"
                   round
                   color="#FFF2EE"
                   text-color="#666"
                   style="margin: 5px 0px 5px 10px;"
                   type="warning">{{ hot.cityName }}</van-tag>
        </div>
   </div>
   <div class="city-list">
        <van-index-bar>
          <template v-for="(item,index) in groupData?.cities">
            <van-index-anchor :index="item.group"  />
            <van-cell v-for="city in item.cities" :key="city.cityId" :title="city.cityName" />
          </template>
          
        </van-index-bar>
   </div>
   </div>
</template>

<script setup>
defineProps({
  groupData:{
    type:Object,
    default:() => ({})
  }
})
</script>

<style scoped lang="less">
.hots{
  padding: 0 16px;
  .title{
    font-size: 15px;
    margin: 10px 0;
  }
  .hot-tags{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>