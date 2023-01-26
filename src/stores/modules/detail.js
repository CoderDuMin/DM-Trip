import { getHouseDetail } from "@/service/modules/detail";
import { defineStore } from "pinia";

const useDetailStore = defineStore('detail',{
  state:() => ({
    detailInfos:{}
  }),
  actions:{
    async fetchHouseDetailData(houseId){
      const res = await getHouseDetail(houseId)
      this.detailInfos = res.data
    }
  }
})

export default useDetailStore