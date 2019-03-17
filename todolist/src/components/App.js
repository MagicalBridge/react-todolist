import React, { Component } from "react";
import AddTodoContainer from "../containers/AddTodoContainer";
import FooterContainer from "../containers/FooterContainer";
import TodoListContainer from "../containers/TodoListContainer";
class App extends Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    );
  }
}
export default App;
