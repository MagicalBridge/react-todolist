import React, { Component } from 'react'; // es6的解构赋值。
import { connect } from 'react-redux';


class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputVale} />
          <button>提交</button>
        </div>
        <ul>
          <li>louis</li>
        </ul>
      </div>
    )
  }
}

const mapStateToPros = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputVale(e){
     const action = {
       type:"change_input_value",
       value:e.target.value
     }
     dispatch(action);
    // console.log(e.target.value);
    }
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(TodoList);