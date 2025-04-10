/* Display a single todo item */
import React from 'react'
import { useStoreActions } from 'easy-peasy' // auto-rerenders with the updated list

const TodoItem = ({ todo }) => { // Receive todo object as a prop

  // Destructure both toggle and remove
  const { toggle, remove } = useStoreActions(actions => ({
    toggle: actions.toggle,
    remove: actions.remove
  }))

  return (
    <div className="todo" 
          style={{  textDecoration: 
                        todo.completed ? 
                          'line-through' : /* If todo.completed is true */
                          'none' }}>   
                            
        {/* Display title */}
        <span 
          // Trigger toggle action to update the state centrally 
          onClick={() => toggle(todo.id)} 
          style={{ cursor: 'pointer' }}
        >
          { todo.title }
        </span>
        
        {/* Display delete button */}
        <button
          // Call remove action to remove this todo from the global todos array
          onClick={() => remove(todo.id)}>

            <i className="fas fa-trash-alt" /> {/* trash icon */}

        </button>

    </div>
  )
}

export default TodoItem