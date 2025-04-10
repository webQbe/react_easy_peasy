/* Display a single todo item */
import React from 'react'
import { useStoreActions } from 'easy-peasy' // To re-render the list automatically to reflect changes

const TodoItem = ({ todo }) => { // Receive todo object as a prop

  // Pull toggle action from the store
  const toggle = useStoreActions(actions => actions.toggle)

  return (
    <div className="todo" 
          style={{  textDecoration: 
                        todo.completed ? 
                          'line-through' : /* If todo.completed is true */
                          'none' }}>   
                            
        {/* Display title */}
        <span 
          onClick={() => toggle(todo.id)} // Trigger toggle action to update the state centrally 
          style={{ cursor: 'pointer' }}
        >
          { todo.title }
        </span>
        
        {/* Display delete button */}
        <button>
            <i className="fas fa-trash-alt" />
        </button>

    </div>
  )
}

export default TodoItem