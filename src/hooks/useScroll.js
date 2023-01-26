import { ref,onMounted,onUnmounted,onActivated,onDeactivated } from 'vue'
import { throttle } from 'underscore'

export default function useScroll(elRef){
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)

  const listenScroll = throttle(() => {
    if(el === window){
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
    }
    else{
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
      scrollTop.value = el.scrollTop
    }
    if(clientHeight.value + scrollTop.value >= scrollHeight.value){
      isReachBottom.value = true
    }
  },100)

  onMounted(() => {
    console.log('监听滚动事件')
    if(elRef) el = elRef.value
    el.addEventListener('scroll',listenScroll)
  })
  onUnmounted(() => {
    console.log('移除监听滚动事件')
    el.removeEventListener('scroll',listenScroll)
  })
  onActivated(() => {
    console.log('监听滚动事件')
    if(elRef) el = elRef.value
    el.addEventListener('scroll',listenScroll)
  })
  onDeactivated(() => {
    console.log('移除监听滚动事件')
    el.removeEventListener('scroll',listenScroll)
  })

  return { isReachBottom,
           clientHeight,
           scrollHeight,
           scrollTop
         }
  
}