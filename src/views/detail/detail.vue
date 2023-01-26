<template>
  <div ref="detailRef" class="detail top-page">
    <TabControl v-if="isShowTab" 
                ref="tabControlRef"
                class="tabs"
                :titles="titles" @tab-item-click="tabClick"></TabControl>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onPageBack"
    />
    <div class="main" v-if="mainPart">
      <DetailSwipe  :house-pics="mainPart.topModule.housePicture.housePics" />
      <DetailInfo name="描述" :ref="getRef" :top-info="mainPart.topModule" />
      <DetailFacility name="设施" :ref="getRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <DetailLandlord name="房东" :ref="getRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <DetailComment name="评论" :ref="getRef" :comment="mainPart.dynamicModule.commentModule" />
      <DetailNotice name="须知" :ref="getRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <DetailMap name="周边" :ref="getRef" :position="mainPart.dynamicModule.positionModule" />
      <DetailIntro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">趣旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { computed,ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useDetailStore from '@/stores/modules/detail'

import TabControl from '@/components/tab-control/tab-control.vue'
import DetailSwipe from './cpns/detail-01-swipe.vue'
import DetailInfo from './cpns/detail-02-infos.vue'
import DetailFacility from './cpns/detail-03-facility.vue'
import DetailLandlord from './cpns/detail-04-landlord.vue'
import DetailComment from './cpns/detail-05-comment.vue'
import DetailNotice from './cpns/detail-06-notice.vue'
import DetailMap from './cpns/detail-07-map.vue'
import DetailIntro from './cpns/detail-08-intro.vue'
import useScroll from '@/hooks/useScroll';

const route = useRoute()
const router = useRouter()
const detailStore = useDetailStore()
detailStore.fetchHouseDetailData(route.params.id)

// watch(route,() => {
//   detailStore.fetchHouseDetailData(route.params.id)
// },{
//   deep:true
// })

const { detailInfos } = storeToRefs(detailStore)
const mainPart = computed(() => detailInfos.value?.mainPart)

// f返回上级
const onPageBack = () => {
  router.back()
}

// tabcontrol相关的操作
const detailRef = ref()
const {scrollTop,isReachBottom} = useScroll(detailRef)
const isShowTab = computed(()=>{
  return scrollTop.value > 243
})
const elRefs = ref({})
const getRef = (value) => {
  if(!value) return
  const key = value.$el.getAttribute('name')
  elRefs.value[key] = value.$el
}
const titles = computed(() => {
  return Object.keys(elRefs.value)
})
const tabClick = (index) => {
  console.log('tabClick',index)
  const key = Object.keys(elRefs.value)[index]
  const el = elRefs.value[key]
  console.log(key,el,el.offsetTop)
  if(el.offsetTop !== 0){
    detailRef.value.scrollTo({
      top: el.offsetTop - 44,
      // behavior: 'smooth'
    })
  }

}
const tabControlRef = ref()
watch(scrollTop,(newValue) => {
  const elTops = Object.values(elRefs.value).map(el => el.offsetTop)
  console.log(elTops)
  let index = -1;
  for(let i = 0; i<elTops.length;i++){
    if(newValue < (elTops[i] - 44)){
      index = i - 1
      break
    }
  }
  console.log(index)
  tabControlRef.value?.setCurrentIndex(index)
})
</script>

<style scoped lang="less">
.tabs{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>