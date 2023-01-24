<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="handleCancel"
      />
      <van-tabs v-model:active="tabAcitive" color="#ff9854">
        <template v-for="(value,key,index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <div class="hots">
        <div class="title">热门</div>
        <div class="hot-tags">
          <van-tag v-for="hot in currentCityGroup?.hotCities" 
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
          <template v-for="(item,index) in currentCityGroup?.cities">
            <van-index-anchor :index="item.group"  />
            <van-cell v-for="city in item.cities" :key="city.cityId" :title="city.cityName" />
          </template>
          
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';


const router = useRouter()
const cityStore = useCityStore()

const { allCities } = storeToRefs(cityStore)
const searchValue = ref('')
const tabAcitive = ref()
const currentCityGroup = computed(() => allCities.value[tabAcitive.value])


const handleCancel = () => {
  router.back()
}

cityStore.fetchAllCitiesData()

</script>

<style scoped lang="less">
.city{
  height: 100vh;
  .content{
    height:calc(100% - 98px);
    overflow-y: auto;
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
  }
}
</style>