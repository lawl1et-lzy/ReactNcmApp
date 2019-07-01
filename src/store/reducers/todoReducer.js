/* eslint-disable */
import { ADD_TODO, DEL_TODO } from '../actions/actionTypes.js'
// import { addTodo } from '../actions/todoAction';

const initState = {
  list: ['lawl1et', 'niya']
}
// 添加
const addTodo = (state, action) => {
  let newList = [...action.payload.list]

  return {
    list: newList
  }
}
// 删除
const delTodo = (state, action) => {
  let index = action.payload.index
  let oriState = state.list
  return {
    list: oriState.splice(index, 1)
  }
}
/**
 * 
 * @param {*} state 
 * @param {*} action 所有 action 的集合
 */
const todoReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_TODO :
      return addTodo(state, action);
    case DEL_TODO :
        return delTodo(state, action);
    default:
      return state;
  }
}

export default todoReducer
