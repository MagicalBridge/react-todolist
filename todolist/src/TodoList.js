import React, { Component } from 'react'; // es6的解构赋值。
import { connect } from 'react-redux';   // 这个api也很重要
import {change_input_value,add_item, delete_handle} from './store/actionCreators';


class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changeInputVale}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item,index)=>{
              return <li onClick={() => this.props.delete_item(index)} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 接收一个state 将store 里面数据映射给组件变成props
const mapStateToPros = (state) => {
  return {
    inputValue: state.inputValue, // store 里面的inputvalue 会映射到我们的props里面的inputvalue
    list:state.list // store 里面的inputvalue 会映射到我们的props里面的inputvalue
  }
}


// mapDispatchToProps 接收dispatch方法 作用是 如果我想对store的数据做修改
// 这里面的参数dispatch 指的就是store.dispatch 
const mapDispatchToProps = (dispatch) => { // 
  return {
    changeInputVale(e) {
      const action = change_input_value(e.target.value);
      dispatch(action);
    },
    handleClick(){
      const action = add_item();
      dispatch(action); // 发给store  store 会再发给 reducer
    },
    delete_item(index){
      const action = delete_handle(index);
      dispatch(action);
    }
  }
}

// connect 的方法的意思是将组件和store 做一个连接。
export default connect(mapStateToPros, mapDispatchToProps)(TodoList);