import React, { Component } from 'react'; // es6的解构赋值。
import { connect } from 'react-redux';   // 这个api也很重要


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
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToPros = (state) => {
  return {
    inputValue: state.inputValue, // store 里面的inputvalue 会映射到我们的props里面的inputvalue
    list:state.list
  }
}


// mapDispatchToProps 接收dispatch方法 作用是 如果我想对store的数据做修改
// 这里面的参数dispatch 指的就是store.dispatch 
const mapDispatchToProps = (dispatch) => { // 
  return {
    changeInputVale(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick(){
      const action = {
        type:'add_item'
      }
      dispatch(action); // 发给store  store 会再发给 reducer
    }
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(TodoList);