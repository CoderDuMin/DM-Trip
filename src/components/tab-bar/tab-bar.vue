<template>
  <div class="tab-bar">
    <template v-for="(item,index) in tabbarData" :key="item.path">
      <div :class="{'tab-item':true,'active':$route.path == item.path}" @click="tabClick(item)">
        <img :src="getImgUrl($route.path == item.path ? item.activeImg : item.img)" alt="">
        <span class="title">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { tabbarData } from '@/assets/data/tab-bar'
import { getImgUrl } from '@/utils/utils'

const router = useRouter()

const tabClick = (item) => {
  console.log('点击tab',item)
  router.push({
    path:item.path
  })
}

</script>

<style scoped lang="less">
.tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  .tab-item{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active{
      color:orange;
    }
    img{
      width: 36px;
      height: 36px;
    }
  }
}
</style>