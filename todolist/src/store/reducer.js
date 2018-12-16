import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
// reducers 可以接受state 但是绝对不能直接修改state
export default (state = defaultState, action) => { // 默认的数据是一个空的对象
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)); // 执行一个深拷贝;
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); // 执行一个深拷贝;
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); // 执行一个深拷贝;
    newState.list.splice(action.index,1); // 删除数组的中的一个下标
    return newState;
  }
  // console.log(state, action)
  return state;
}

// reduces 是一个函数 接收两个参数 一个是state 一个是action
// state 里面存放的是所有的数据 