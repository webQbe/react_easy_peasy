/* Main component */
import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {

  return (
    <div className="App">
      <Todos />   {/* displays a list of todo items */}
      <AddTodo /> {/* a form to add new todos */}
    </div>
  )
}

export default App
