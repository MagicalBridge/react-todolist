import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

//  包裹provider组件的意思 是包裹在这个组件中的所有的组件都有能力接收store的数据
const App = (
  <Provider store={store}>  
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
