import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
  render() {
    // 这是一种结构赋值的写法
    const { todos,toggle } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return <Todo key={todo.id} {...todo} onClick={()=>{toggle(todo.id)}} />
        })}
      </ul>
    );
  }
}

export default TodoList;
