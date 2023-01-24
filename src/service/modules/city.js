import DMRequest from '../request'

export function getAllCities(){
  return DMRequest.get({
    url:'/city/all'
  })
}