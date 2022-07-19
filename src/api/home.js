import request from '@/utils/request'

export const getSwiper = () => request({ url: 'home/swiper' })

export const getGroups = (area) =>
  request({ url: '/home/groups', params: { area } })
