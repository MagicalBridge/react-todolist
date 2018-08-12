import React, { Component, Fragment } from 'react'; // es6的解构赋值。
import store from './store';  // 引入store index.js 可以默认额省略不写
import {getInputValueAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState()); // {inputValue: "", list: Array(0)}
        this.state = store.getState(); // 我们组件中的数据来源来源我们的store 而不是我们组建自身维护的state状态

        this.handleInputChange = this.handleInputChange.bind(this); // 函数在 constructor 中绑定指向。
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
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