import React, { Component, Fragment } from 'react'; // es6的解构赋值。

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this); // 函数在 constructor 中绑定指向。
    this.handleBtnClick = this.handleBtnClick.bind(this);
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
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }
}
// Fragment 
export default TodoList;