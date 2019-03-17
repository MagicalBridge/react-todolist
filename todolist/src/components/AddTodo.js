import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
  handleClick = () => {
    this.props.addTodo(this.props.text);
  };
  handleChange = e => {
    this.props.setTodoText(e.target.value);
  };
}

export default AddTodo;
