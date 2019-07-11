import { GET_SONG_LIST } from '../actions/actionTypes'
import mState from '../state/index.state'

const getSongList = (state, action) => {
  return {
    songList: action.data || []
  }
}

/**
 * @param {*} state 
 * @param {*} action 所有 action 的集合
 */
const todoReducer = (state = mState.songList, action) => {
  switch(action.type) {
    case GET_SONG_LIST:
      return getSongList(state, action);
    default:
      return [];
  }
}

export default todoReducer