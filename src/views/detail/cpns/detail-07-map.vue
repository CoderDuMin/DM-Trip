<template>
  <div class="map">
    <DetailSection title="位置周边" more-text="查看更多周边信息" >
      <div id="mapContainer" ref="mapRef">
      </div>
    </DetailSection>
  </div>
</template>

<script setup>

import DetailSection from '@/components/detail-section/detail-section.vue'
import { onMounted, onUnmounted, ref, shallowRef } from 'vue';

const props = defineProps({
  position:{
    type:Object,
    default:() => ({})
  }
})
const mapRef = ref()
const map = shallowRef()
onMounted(() => {
  map.value = new AMap.Map(mapRef.value, {
      zoom:15,//级别
      center: [props.position.longitude, props.position.latitude],//中心点坐标
      viewMode:'3D'//使用3D视图
  });
  const marker = new AMap.Marker({
        position:[props.position.longitude, props.position.latitude]//位置
    })
  map.value?.add(marker);//添加到地图
})
onUnmounted(() => {
  map.value && map.value?.destroy()
})
</script>

<style scoped lang="less">
#mapContainer{
  height: 200px;
}
</style>