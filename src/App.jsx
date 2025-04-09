/* Main component */
import { useState } from 'react'
import model from './model'
import { StoreProvider, createStore } from 'easy-peasy'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

// Create an Easy Peasy store from model
const store = createStore(model)

function App() {

  /* <StoreProvider> wraps the app to make the store available to all components using Easy Peasy hooks */
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Todos />   {/* displays a list of todo items */}
        <AddTodo /> {/* a form to add new todos */}
      </div>
    </StoreProvider>
  )
}

export default App
