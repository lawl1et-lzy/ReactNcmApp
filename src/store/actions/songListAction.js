import {
  GET_SONG_LIST
} from './actionTypes'
import Api from '@/api/index.api'
import mState from '../state/index.state'

// 获取歌曲列表
const getSongList = ({ id }) => {
  return async dispatch => {
    if(!id) return false
    let res = await Api.getSongList({ id })
    dispatch(handleGetSongList(res))
  }
}

const handleGetSongList = (res) => {
  let { playlist, code } = res
  if(code === 200) {
    mState.songList = playlist
  }
  return {
    type: GET_SONG_LIST,
    data: mState.songList
  }
}

export {
  getSongList
}