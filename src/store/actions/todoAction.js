import { 
  GET_SONG_SHEET_LIST
} from './actionTypes.js'
import Api from '@/api/index.api'
import mState from '../state/index.state'

// 获取歌单列表
const getSongSheetList = ({ uid }) => {
  if(!uid) return false
  // let res = await Api.getSongSheet(uid)
  // let { playlist, code } = res
  // if(code === 200) {
  //   mState.songList = playlist
  // }
  return {
    type: GET_SONG_SHEET_LIST,
    data: mState.songSheetList
  }
}

export {
  getSongSheetList
}


