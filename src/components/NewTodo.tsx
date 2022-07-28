import React from 'react'

const NewTodo = (props: any) => {
  return (
    <>
      <input
        type="text"
        value={props.todo.inputValue}
        onChange={(e) => props.handleEdit(props.todo.id, e.target.value)}
        disabled={props.todo.checked}
      />
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={() => props.handleChecked(props.todo.id, props.todo.checked)}
      />
      <button onClick={() => props.handleDelete(props.todo.id)}>消</button>
    </>
  )
}

export default NewTodo