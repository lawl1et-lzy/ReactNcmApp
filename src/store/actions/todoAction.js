import { ADD_TODO, DEL_TODO } from './actionTypes.js'

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
}

const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload
  }
}

export {
  addTodo,
  delTodo
}


