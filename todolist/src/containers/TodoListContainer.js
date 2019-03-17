import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../action";

const getVisiableTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(t => {
        t.completed;
      });
    case "active":
      return todos.filter(t => {
        !t.completed;
      });
    default:
      return new Error("UnKnow filter :" + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisiableTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);