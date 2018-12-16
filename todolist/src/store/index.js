import { createStore } from 'redux';
import reducer from './reducer'; // 引入 reducer

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // 调用这个方法就可以创建一个 store 出来。

export default store;




// react 的核心思想就是store 也就是集中式数据处理解决方案，创建 store 的工作也比较简单
// 调用redux 中的一个函数 createStore 创建就可以,
// 但是只是有 store 还是不行的，想想我们之前说到的工作流 提到的reduces 就是必不可少的一个部分。
// 创建 reduces