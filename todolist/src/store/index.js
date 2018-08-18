import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'; // 引入 reducer
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk,logger)
);
const store = createStore(
  reducer,
  enhancer
)

export default store;