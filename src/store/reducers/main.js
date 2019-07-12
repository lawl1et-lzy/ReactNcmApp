import todoReducer from './todoReducer'
import songListReducer from './songListReducer'
import userInfoReducer from '@/pages/My/store/reducer'

import { combineReducers } from 'redux';

const reducers = combineReducers({
  todoReducer,
  songListReducer,
  userInfoReducer
})

export default reducers