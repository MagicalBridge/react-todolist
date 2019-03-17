import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    };
    this.nextTodoId = 0;
  }
  render() {
    const todos = this.getVisiableTodos();
    const filter = this.state.filter;

    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggle={this.toggleTodo} />
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        />
      </div>
    );
  }

  // 这个函数是对想要展示的todo 进行过滤。
  getVisiableTodos = () => {
    // 当前的 过滤条件
    const currentFilter = this.state.filter;

    return this.state.todos.filter(item => {
      if (currentFilter === "active") {
        return !item.completed;
      } else if (currentFilter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  };
  // 点击 每一个button 更改 filter 的值
  setVisibilityFilter = filter => {
    this.setState({
      filter
    });
  };

  // 新增待办事项这个函数供 todo 组件调用  目的是 增加 todos 这个数组的内容
  addTodo = text => {
    const todo = {
      id: this.nextTodoId++, // id 自增长
      text, // 将input 的数据放进去
      completed: false // 新添加的事件 都是false
    };
    // 更新 todos
    const newTodos = [todo, ...this.state.todos];
    console.log(newTodos);

    this.setState({
      todos: newTodos
    });
  };

  // 修改当前点击这个的状态。
  toggleTodo = id => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    this.setState({
      todos: newTodos
    });
  };
}

export default App;
