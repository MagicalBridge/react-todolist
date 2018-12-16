import { combineReducers } from 'redux';
import { headerReducer } from '../common/header/store/index.js';


export default combineReducers({
  header: headerReducer
})


