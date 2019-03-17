import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
  handleClick = () => {
    this.props.addTodo(this.state.text);
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
}

export default AddTodo;
