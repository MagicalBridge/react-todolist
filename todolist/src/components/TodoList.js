import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
  render() {
    // 这是一种结构赋值的写法 在 App 组件中传入了两个参数 
    // 一个是 todos 一个toggle 都会挂载在 this.props 这个对象上面 
    const { todos, toggle } = this.props;
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
