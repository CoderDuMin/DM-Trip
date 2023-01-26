import { defineStore } from "pinia";

const nowDate = new Date()
const tmrDate = new Date()
tmrDate.setDate(tmrDate.getDate() + 1)

const useMainStore = defineStore('main',{
  state:() => ({
    token:'',
    startDate:nowDate,
    endDate:tmrDate,
    isLoading:false
  })
})

export default useMainStore