import dmRequest from '../request'

export const getHotSuggest = () =>{
  return dmRequest.get({
    url:'/home/hotSuggests'
  })
}