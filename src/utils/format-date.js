import dayjs from 'dayjs'

export const getMonthDay = (date) => {
  return dayjs(date).format('MM月DD日')
}

export const getDiffDay = (startDate,endDate) => {
  return dayjs(startDate).diff(endDate,'day')
}