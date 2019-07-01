import axios from '@/util/Api/Api.js'

class Api {
  // 登录
  static getLogin(params) {
    return axios({
      method: 'get',
      url: '/login/cellphone',
      params
    })
  }
  // 获取歌单列表
  static getSongSheet(params) {
    return axios({
      method: 'get',
      url: '/user/playlist',
      params
    })
  }

  // 获取歌单详细信息
  static getSongList(params) {
    return axios({
      method: 'get',
      url: '/playlist/detail',
      params
    })
  }

  // 获取歌曲详细信息
  static getSongInfo(params) {
    return axios({
      method: 'get',
      url: '/song/detail',
      params
    })
  }

  // 获取个人信息
  static getPersonalInfo(params) {
    return axios({
      method: 'get',
      url: '/user/detail',
      params
    })
  }
}

export default Api