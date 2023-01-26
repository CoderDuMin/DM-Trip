import DMRequest from '../request'

export function getHouseDetail(houseId){
  return DMRequest.get({
    url:'detail/infos',
    params:{
      houseId:houseId
    }
  })
}