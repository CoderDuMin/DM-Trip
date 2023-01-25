import { ref,onMounted,onUnmounted,onActivated,onDeactivated } from 'vue'
import { throttle } from 'underscore'

export default function useScroll(){
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)

  const listenScroll = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollHeight.value = document.documentElement.scrollHeight
    scrollTop.value = document.documentElement.scrollTop
    if(clientHeight.value + scrollTop.value >= scrollHeight.value){
      isReachBottom.value = true
    }
  },100)

  onMounted(() => {
    window.addEventListener('scroll',listenScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll',listenScroll)
  })
  onActivated(() => {
    window.addEventListener('scroll',listenScroll)
  })
  onDeactivated(() => {
    window.removeEventListener('scroll',listenScroll)
  })

  return { isReachBottom,
           clientHeight,
           scrollHeight,
           scrollTop
         }
  
}