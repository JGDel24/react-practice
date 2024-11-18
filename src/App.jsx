import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {id: 1, title: 'finish homework'},
  {id: 2, title: 'walk dog'},
  {id: 3, title: 'read book'}
]

function App() {
 <div>
    <h1>Todo List</h1>
    <ul>
      {todoList.map ( toDo => (
        <li key={toDo.id}>{toDo.title}</li>
      )

      )}
    </ul>
 </div>
}

export default App
