<template>
  <div class="tab-bar">
    <!-- <template v-for="(item,index) in tabbarData" :key="item.path">
      <div :class="{'tab-item':true,'active':$route.path == item.path}" @click="tabClick(item)">
        <img :src="getImgUrl($route.path == item.path ? item.activeImg : item.img)" alt="">
        <span class="title">{{ item.text }}</span>
      </div>
    </template> -->
    <van-tabbar route v-model="currentIndex" active-color="#ff9854">
      <van-tabbar-item v-for="(item,index) in tabbarData" icon="home-o" :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon>
          <img :src="getImgUrl(currentIndex == index ? item.activeImg : item.img)" alt="" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { tabbarData } from '@/assets/data/tab-bar'
import { getImgUrl } from '@/utils/utils'
const currentIndex = ref(0)

</script>

<style scoped lang="less">
.tab-bar{
  img{
    height: 24px;
  }
}
</style>