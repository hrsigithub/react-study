import React, { useState } from 'react';
import { resolveModuleName } from 'typescript';
import './App.css';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string
    id: number
    checked: boolean
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => { 
      if (todo.id === id) {
        todo.inputValue = inputValue
      }
      return todo
    })

    setTodos(newTodos)

  }

  const handleChecked = (id: number, checked:boolean) => {
    const newTodos = todos.map((todo) => { 
      if (todo.id === id) {
        todo.checked = !checked
      }
      return todo
    })

    setTodos(newTodos)

  }

  const handleDelete = (id:Number) => {
    const newTodos= todos.filter((todo) => todo.id !== id)
   
    setTodos(newTodos)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 新しい todo を作成
    const newTodo : Todo = {
      inputValue: inputText,
      id: inputText.length,
      checked: false,
    }
      
    setTodos([newTodo, ...todos])
    setInputText("")
  }




  return (
    <div className="App">
      <div>
        <h2>Todo リスト with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText"         
          />
          <input type="submit" value="作成" className='submitButton'/>
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} 
                className="inputText" value={todo.inputValue}
                disabled={todo.checked}
                />
              <input type="checkbox" onChange={(e) => handleChecked(todo.id, todo.checked)} />
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
