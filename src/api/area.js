import request from '@/utils/request'

/**
 *  获取城市列表
 * @param {*} level 等级
 * @returns
 */
export const getCity = (level) =>
  request({ url: '/area/city', params: { level } })

/**
 * 获取热门城市
 * @returns
 */
export const getHot = () => request({ url: '/area/hot' })
