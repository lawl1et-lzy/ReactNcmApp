import todoReducer from './todoReducer'
import songListReducer from './songListReducer'

import { combineReducers } from 'redux';

const reducers = combineReducers({
  todoReducer,
  songListReducer
})

export default reducers