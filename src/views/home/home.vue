<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="localtion">
      <span class="position">福州</span>
      <div class="current">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar/index.vue';
</script>

<style scoped lang="less">
.banner{
  img{
    width:100%;
  }
}
.localtion{
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .position{
    flex:1;
  }
  .current{
    width: 74px;
    display: flex;
    align-items: center;
    img{
      width: 18px;
      height: 18px;
    }
  }
}
</style>