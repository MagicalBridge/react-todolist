import { createStore } from 'redux';
import reducer from './reducer'; // 引入 reducer

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // 调用这个方法就可以创建一个 store 出来。

export default store;