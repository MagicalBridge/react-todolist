import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM ,INIT_LIST} from './actionTypes';

export const getInputValueAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}
// 接收的数据是data 返回的也是data
export const initListAction = (data) => {
  return {
    type: INIT_LIST,
    data
  }
}