const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => { // 默认的数据是一个空的对象
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)); // 执行一个深拷贝;
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state)); // 执行一个深拷贝;
    console.log(newState.inputValue);
    newState.list.push = newState.inputValue;
    newState.inputValue = '';
    return newState;
  }
  // console.log(state, action)
  return state;
}