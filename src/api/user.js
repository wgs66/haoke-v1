import request from '@/utils/request'

export const login = (username, password) =>
  request({ url: '/user/login', method: 'POST', data: { username, password } })

export const userInfo = () => request({ url: '/user' })

export const getFavorites = () => request({ url: '/user/favorites' })
