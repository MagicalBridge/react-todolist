import React from 'react'

const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <input
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleBtnClick}>提交</button>
      </div>
      <ul>
        {
          props.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={(index) => { props.handleItemDelete(index) }}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default TodoListUI