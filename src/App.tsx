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
              {/* {todo.inputValue} */}
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} className="inputText" value={todo.inputValue}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
