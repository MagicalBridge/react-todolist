import React, { Component } from 'react'; // es6的解构赋值。
import store from './store';  // 引入store index.js 可以默认额省略不写
import { getInputValueAction, getAddItemAction, getDeleteItemAction,initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios'; // 引入axios
class TodoList extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState()); // {inputValue: "", list: Array(0)}
    this.state = store.getState(); // 我们组件中的数据来源来源我们的store 而不是我们组建自身维护的state状态

    this.handleInputChange = this.handleInputChange.bind(this); // 函数在 constructor 中绑定指向。
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  // 生命周期函数组件挂载完毕
  componentDidMount() {
    axios.post('http://www.ifruit.org:7300/mock/59afdddae4205b01cfc9ede5/api_1504685109840/front1/login.do', {
      number: "13127733713"
    })
      .then(res => {
        let _resData = res.data.list;
        console.log(_resData);
        const action = initListAction(_resData);
        store.dispatch(action);
      })
  }

  handleInputChange(e) {
    const action = getInputValueAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
}
// Fragment 
export default TodoList;