<template>
  <div class="loading" v-show="mainStore.isLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';

const mainStore = useMainStore()
</script>

<style scoped lang="less">
.loading{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.2);
  z-index: 999;
  .bg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 /100% 100%;
    img{
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>