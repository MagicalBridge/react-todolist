import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes';

export const change_input_value = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  }
}

export const add_item = (value) => {
  return {
    type: ADD_ITEM
  }
}

export const delete_handle = (index) => {
  return {
    type: DELETE_ITEM,
    index: index
  }
}