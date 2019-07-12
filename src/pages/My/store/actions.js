import {
  GET_USER_INFO
} from './actionTypes'
import Api from '@/api/index.api'
import mState from './state'

// 获取个人信息
const getUserInfo = ({ uid }) => {
  return async dispatch => {
    if(!uid) return false
    let res = await Api.getPersonalInfo({ uid })
    dispatch(handleGetUserInfo(res))
  }
}

const handleGetUserInfo = (res) => {
  let { code } = res
  if(code === 200) {
    mState.userInfo = res
  }
  return {
    type: GET_USER_INFO,
    data: mState.userInfo
  }
}

export {
  getUserInfo
}