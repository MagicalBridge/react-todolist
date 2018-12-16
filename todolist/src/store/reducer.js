import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store/index.js';


export default combineReducers({
  header: headerReducer
})


