import * as actionTypes from './actionType.js';
import {fromJS}  from 'immutable';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused',true)
  }

  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused',false)
  }
  return state;
}