import dayjs from 'dayjs'

export const getMonthDay = (date,format='MM月DD日') => {
  return dayjs(date).format(format)
}

export const getDiffDay = (startDate,endDate) => {
  return dayjs(startDate).diff(endDate,'day')
}