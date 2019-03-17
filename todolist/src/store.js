import { createStore } from "redux";
import rootReducer from "./reducers";
import { addTodo, setFilter, setTodoText, toggleTodo } from "./action";

const store = createStore(rootReducer);

// 初始化 state

console.log(store.getState());

// 订阅state的变化

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// 发送action
store.dispatch(addTodo("learn react"));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter("active"));
store.dispatch(setTodoText("learn"));

// 取消订阅
unsubscribe();
