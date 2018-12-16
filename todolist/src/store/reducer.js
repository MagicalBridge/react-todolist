import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/headerReducer.js';


export default combineReducers({
  header: headerReducer
})


