<template>
  <div class="detail-swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in housePics" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template  v-for="(value,key,index) in swipeGroup "
                     :key="key"
                      >
            <div 
              class="item" 
              :class="{'active': housePics[active]?.enumPictureCategory == key}"
              >
              {{ getName(value[0].title) }}
              <span class="count" v-if="housePics[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(housePics[active]) }}/{{ value.length }}
              </span>
            </div>
          </template>
          
          
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
// 定义props
const props = defineProps({
  housePics:{
    type:Array,
    default:() => ([])
  }
})

// 对数据进行转化
const swipeGroup = {}

for(const ite of props.housePics){
  let valueArr = swipeGroup[ite.enumPictureCategory]
  if(!valueArr){
    valueArr = []
    swipeGroup[ite.enumPictureCategory] = valueArr
  }
  valueArr.push(ite)
}
console.log(swipeGroup)

// 定义转换数据的方法
const nameReg = /【(.*?)】/i
const getName = (name) => {
  // return name.replace("：", "").replace("】", "").replace("【", "")
  const results = nameReg.exec(name)
  return results[1]
}

// 获取当前分类索引
const getCategoryIndex = (item) => {
  const valueArr = swipeGroup[item.enumPictureCategory]
  let index = valueArr.findIndex(ite => ite === item) + 1
  console.log('index',index)
  return index 
}


</script>

<style scoped lang="less">
.detail-swipe {
  height: 251px;
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>