/* Display a list of todo items */
import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy' // for reading state reactively in components
import TodoItem from './TodoItem'

const Todos = () => {

  // Re-render component with the fetched data
  const todos = useStoreState(
                    state => state.todos // Request todos array from global state
                  )

  // Access fetchTodos thunk in model.jsx
  const fetchTodos = useStoreActions(actions => actions.fetchTodos)

  useEffect(() => { // Run once when the component mounts

    fetchTodos()
    /* When the thunk resolves, it updates the global todos array */

  }, [])

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