import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NewTodo from './components/NewTodo'
import TodoInputText from './components/TodoInputText'
import { TodoList } from './components/TodoList'
import Todo from './components/types'

function App() {
  const [inputText, setInputText] = useState('')
  //todo配列オブジェクトの更新用に用意。プロパティはinputValue, id, checkedの３つを更新する。
  const [todos, setTodos] = useState<Todo[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setInputText(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!inputText) {
      return
    }

    //新しいTodo作成
    const newTodo: Todo = {
      inputValue: inputText,
      id: todos.length,
      checked: false,
    }

    setTodos([newTodo, ...todos])
    console.log(inputText)
    setInputText(inputText)
  }

  //todo編集
  const handleEdit = (id: number, inputValue: string) => {
    /* ディープコピー(完全にコピーされた別の配列)に変えよう(ミューテートから守るため) */
    const deepCopy = todos.map((todo) => ({ ...todo }))
    console.log(deepCopy)

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue
      }
      return todo
    })

    // /* シャローコピー */
    // const newTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.inputValue = inputValue;
    //   }
    //   return todo;
    // });

    setTodos(newTodos)
  }

  //完了未完了
  const handleChecked = (id: number, checked: boolean) => {
    /* ディープコピー(完全にコピーされた別の配列)に変えよう(ミューテートから守るため) */
    const deepCopy = todos.map((todo) => ({ ...todo }))
    // console.log(deepCopy);

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        //反転
        todo.checked = !checked
      }
      return todo
    })

    setTodos(newTodos)
  }

  //削除
  const handleDelete = (id: number) => {
    //idが正しくないのは残す。正しいと消す。
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div>
        <h2>Firebase ログイン</h2>
        <Home />

        <h2>Todoリスト with Typescript</h2>
        <hr />
        <form onSubmit={(e) => handleSubmit(e)}>
          <TodoInputText handleChange={handleChange} />
        </form>

        {/* タスク設定が完了したら */}

        <TodoList
          handleEdit={handleEdit}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          todos={todos}
        />
      </div>
    </div>
  )
}

export default App
