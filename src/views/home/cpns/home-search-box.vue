<template>
  <div class="home-search-box">
    <div class="localtion">
      <span class="position" @click="choosePosition">福州</span>
      <div class="current" @click="getLoc">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

const choosePosition = () => {
  console.log('跳转选择城市')
  router.push('/city')
}
const getLoc = () => {
  console.log('点击我的位置')
  navigator.geolocation.getCurrentPosition(res => {
    console.log('获取位置成功',res)
  },err => {
    console.log('获取位置失败',err)
  },{
    timeout:3000,
    
  })
}
</script>

<style scoped lang="less">
.localtion{
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .position{
    flex:1;
  }
  .current{
    width: 80px;
    display: flex;
    align-items: center;
    img{
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>