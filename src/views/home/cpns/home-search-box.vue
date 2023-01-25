<template>
  <div class="home-search-box">
    <!-- 城市/位置 -->
    <div class="localtion">
      <span class="position" @click="choosePosition">{{cityStore.currentCity.cityName}}</span>
      <div class="current" @click="getLoc">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line " @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ getMonthDay(dateInfo.startDate) }}</span>
        </div>
        <div class="stay">共{{ dateInfo.stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ getMonthDay(dateInfo.endDate) }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="true"
      @confirm="onDateConfirm" 
    />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <van-button color="#ff9854" style="font-size:15px;" round  block>开始搜索</van-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { getMonthDay,getDiffDay } from '@/utils/format-date'
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

// 位置/城市
const router = useRouter()
const cityStore = useCityStore()

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

// 日期信息
const showCalendar = ref(false)
const dateInfo = reactive({
  startDate:new Date(),
  endDate:new Date().setDate(new Date().getDate() + 1),
  stayCount:1
})
const onDateConfirm = (dates) => {
  // 更改日期
  dateInfo.startDate = dates[0]
  dateInfo.endDate = dates[1]
  dateInfo.stayCount = getDiffDay(dates[0],dates[1])
  // 关闭日期弹窗
  showCalendar.value = false
}

// 热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)


</script>

<style scoped lang="less">
.home-search-box{
  background-color: #faf8f9;
  padding: 0 0 10px;
  --van-calendar-popup-height: 100%;
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
  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;

    .start {
      flex: 1;
      display: flex;
      height: 44px;
      align-items: center;
    }

    .end {
      min-width: 30%;
      padding-left: 20px;
    }

    .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-size: 12px;
        color: #999;
      }

      .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  .date-range {
    height: 44px;
    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  }

  .price-counter {
    .start {
      border-right: 1px solid  var(--line-color);
    }
  }

  
  .hot-suggests {
    margin: 10px 0;
    height: auto;
    .item {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
      font-size: 12px;
      line-height: 1;
    }
  }
  .search-btn{
    margin-top: 10px;
  }

}

</style>