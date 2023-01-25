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
      <template v-for="(value,key,index) in allCities" :key="key" >
        <CityGroup :group-data="value" v-show="key === tabAcitive" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import CityGroup from './cpns/city-group.vue'


const router = useRouter()
const cityStore = useCityStore()

const { allCities } = storeToRefs(cityStore)
const searchValue = ref('')
const tabAcitive = ref('')


const handleCancel = () => {
  router.back()
}

cityStore.fetchAllCitiesData()

</script>

<style scoped lang="less">
.city{
  height: 100vh;
  .top{
    position: relative;
  }
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