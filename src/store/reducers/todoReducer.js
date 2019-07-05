/* eslint-disable */
import {
  GET_SONG_SHEET_LIST
} from '../actions/actionTypes.js'
import mState from '../state/index.state'

let getSongSheetList = (state, action) => {
  return {
    songSheetList: action.data || []
  }
}

/**
 * 
 * @param {*} state 
 * @param {*} action 所有 action 的集合
 */
const todoReducer = (state = mState.songList, action) => {
  switch(action.type) {
    case GET_SONG_SHEET_LIST :
      return getSongSheetList(state, action);
    default:
      return '';
  }
}

export default todoReducer
