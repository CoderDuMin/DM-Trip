<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onPageBack"
    />
    <div class="main" v-if="mainPart">
      <DetailSwipe :house-pics="mainPart.topModule.housePicture.housePics" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import DetailSwipe from './cpns/detail-swipe.vue'
import useDetailStore from '@/stores/modules/detail'

const route = useRoute()
const router = useRouter()
const detailStore = useDetailStore()
detailStore.fetchHouseDetailData(route.params.id)

const { detailInfos } = storeToRefs(detailStore)
const mainPart = computed(() => detailInfos.value?.mainPart)

// f返回上级
const onPageBack = () => {
  router.back()
}

</script>

<style scoped lang="less">
</style>