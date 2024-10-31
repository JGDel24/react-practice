import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  { id: 1, title: 'walk dogs' },
  { id: 2, title: 'make coffee' },
  { id: 3, title: 'practice language' }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo =>
          <li key={todo.id}>{todo.title}</li>
        )}
      </ul>
    </div>
    
  )
}

export default App
