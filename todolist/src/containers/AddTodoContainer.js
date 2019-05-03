import { connect } from "react-redux";
import { setTodoText, addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

// 将redux的state 映射到 react 组件中的props 上面
// 这个state 是redux 中的全局 state。 返回值是 一个普通的 key-value的对象
// 
const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
