import React, { Component } from 'react'

class TodoListUI extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button onClick={this.props.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={(index)=>{this.props.handleItemDelete(index)}}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoListUI