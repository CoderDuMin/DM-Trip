<template>
  <div class="home-content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="(item,index) in houselist" :key="item.data.houseId">
        <HomeItemV9 v-if="item.discoveryContentType === 9" :item-data="item.data" @click="toDetail(item.data)"></HomeItemV9>
        <HomeItemV3 v-else-if="item.discoveryContentType === 3" :item-data="item.data" @click="toDetail(item.data)"></HomeItemV3>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';
import HomeItemV9 from '@/components/home-item-v9/home-item-v9.vue';
import HomeItemV3 from '@/components/home-item-v3/home-item-v3.vue';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)

// 跳转详情页
const router = useRouter()
const toDetail = (data) => {
  router.push({
    path:`/detail/${data.houseId}`
  })
}

</script>

<style scoped lang="less">
.home-content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>