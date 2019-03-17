import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT
} from "./actionTypes";

let nextTodoId = 0;

/**
 * @module index
 * @author: louis
 * @description: 新增代办事项
 * @since: 2019-03-17 14:28:20
 */
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

/**
 * @module index
 * @author: louis
 * @description: 切换状态
 * @since: 2019-03-17 14:32:08
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/**
 * @module index
 * @author: louis
 * @description: 设置过滤条件
 * @since: 2019-03-17 14:32:11
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

/**
 * @module index
 * @author: louis
 * @description: 设置待办事件文本
 * @since: 2019-03-17 14:33:25
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
});
