/* Display a list of todo items */
import React from 'react'
import TodoItem from './TodoItem'

const Todos = () => {

  /* Define hard-coded array of todos:
      Each todo has id, title, and completed status. */
  const todos = [
    {
      id: 1,
      title: 'Take out trash',
      completed: true
    },
    {
      id: 2,
      title: 'Pickup kids from school',
      completed: false
    },
    {
      id: 3,
      title: 'Dinner with boss',
      completed: false
    }
  ];

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