<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- <RouterView></RouterView> -->
    <TabBar v-show="!route.meta?.hideTabbar" />
    <Loading />
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router';
import Loading from '@/components/loading/loading.vue'
const route = useRoute()
</script>

<style scoped lang="less">
</style>