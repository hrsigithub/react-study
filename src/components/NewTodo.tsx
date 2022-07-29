import React from 'react'

import Todo from './types'

const NewTodo = (props: {
  handleEdit: (id: number, inputValue: string) => void
  handleChecked: (id: number, checked: boolean) => void
  handleDelete: (id: number) => void
  todo: Todo
}) => {
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
