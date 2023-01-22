export const getImgUrl = (img) => {
  return new URL(`../assets/img/${img}`,import.meta.url).href
}