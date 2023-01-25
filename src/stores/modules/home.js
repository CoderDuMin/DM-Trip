import { getHomeCategories, getHomeHouseList, getHotSuggest } from '@/service/modules/home'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home',{
  state:() => ({
    hotSuggests:[],
    categories:[],
    currentPage:1,
    houselist:[]
  }),
  actions:{
    async fetchHotSuggestData(){
      const res = await getHotSuggest()
      this.hotSuggests = res.data
    },
    async fetchCategoryData(){
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList(){
      const res = await getHomeHouseList(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore