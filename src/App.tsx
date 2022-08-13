import axios from 'axios'
import api from './api'
import React, { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'

const getPosts = async () => {
  const posts = api.get('/posts')
}

function App() {
  return (
    <div className="App">
      <div>
        <button onClick={getPosts}>Posts データ取得</button>
      </div>
    </div>
  )
}

export default App
