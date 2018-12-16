import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM,INIT_LIST_ACTION} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => { // 默认的数据是一个空的对象
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)); // 执行一个深拷贝;
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
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
    newState.list.splice(action.index,1);
    return newState;
  }
  // console.log(state, action)
  return state;
}