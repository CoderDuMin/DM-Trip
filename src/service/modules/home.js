import dmRequest from '../request'

export const getHotSuggest = () =>{
  return dmRequest.get({
    url:'/home/hotSuggests'
  })
}

export const getHomeCategories = () =>{
  return dmRequest.get({
    url:'home/categories'
  })
}

export const getHomeHouseList = (page) =>{
  return dmRequest.get({
    url:'home/houselist',
    params:{
      page
    }
  })
}