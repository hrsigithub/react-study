import React from 'react'

import { NewTodo, Todo } from './index'

const TodoList = (props: any) => {
  return (
    <ul className="todoList">
      {props.todos.map((todo: Todo) => (
        <li key={todo.id}>
          <NewTodo
            todo={todo}
            handleEdit={props.handleEdit}
            handleChecked={props.handleChecked}
            handleDelete={props.handleDelete}
          ></NewTodo>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
