import {ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE} from './actionTypes'

let nextTodoId = 0

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data
})

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error
})

/**
 * 获取待办事项初始数据
 */
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodosSuccess(data));
        }) 
      },
      error => {
        dispatch(fetchTodosFailure(error));
        console.log("An error occurred: "+ error)
      }
    )
  }
}

/**
 * 新增待办事项
 * @param {*} text 
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

/**
 * 更改待办事项状态
 * @param {*} id 
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})

