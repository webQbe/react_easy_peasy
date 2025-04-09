/* Display a list of todo items */
import React from 'react'
import { useStoreState } from 'easy-peasy' // for reading state reactively in components
import TodoItem from './TodoItem'

const Todos = () => {

  // Re-render component when global state updates
  const todos = useStoreState(
                    state => state.todos // Request todos array from global state
                  )

  return (
    <>  
      {/* Displays title and message */}
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      { 
        // Map through todos array
        todos.map(todo => (
            // Render <TodoItem /> for each todo
            <TodoItem todo={todo} key={todo.id}/>
        ))   
      }
    </>
  )
}

export default Todos