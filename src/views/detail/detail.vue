<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onPageBack"
    />
    <div class="main" v-if="mainPart">
      <DetailSwipe :house-pics="mainPart.topModule.housePicture.housePics" />
      <DetailInfo :top-info="mainPart.topModule" />
      <DetailFacility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <DetailLandlord :landlord="mainPart.dynamicModule.landlordModule" />
      <DetailComment :comment="mainPart.dynamicModule.commentModule" />
      <DetailNotice :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <DetailMap :position="mainPart.dynamicModule.positionModule" />
      <DetailIntro :price-intro="mainPart.introductionModule" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useDetailStore from '@/stores/modules/detail'

import DetailSwipe from './cpns/detail-01-swipe.vue'
import DetailInfo from './cpns/detail-02-infos.vue'
import DetailFacility from './cpns/detail-03-facility.vue'
import DetailLandlord from './cpns/detail-04-landlord.vue'
import DetailComment from './cpns/detail-05-comment.vue'
import DetailNotice from './cpns/detail-06-notice.vue'
import DetailMap from './cpns/detail-07-map.vue'
import DetailIntro from './cpns/detail-08-intro.vue'

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