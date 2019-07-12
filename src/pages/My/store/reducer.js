import {
  GET_USER_INFO
} from './actionTypes'
import mState from './state'


let getUserInfo = (state, action) => {
  return {
    userInfo: action.data
  }
}

/**
 * 
 * @param {*} state 
 * @param {*} action 所有 action 的集合
 */

 const reducer = (state = mState.userInfo, action) => {
    switch(action.type){
      case GET_USER_INFO:
        return getUserInfo(state, action);
      default:
        return {}
    }
 }

 export default reducer

