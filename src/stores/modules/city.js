import { getAllCities } from '@/service/modules/city'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city',{
  state:() => ({
    allCities:{},
    currentCity:{cityName:'福州'}
  }),
  actions:{
    async fetchAllCitiesData(){
      const res = await getAllCities()
      this.allCities = res.data
    }
  }
})
export default useCityStore