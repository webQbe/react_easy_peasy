/* Display a single todo item */
import React from 'react'

const TodoItem = ({ todo }) => { // Receive todo object as a prop
  return (
    <div className="todo" 
          style={{  textDecoration: 
                        todo.completed ? 
                          'line-through' : /* If todo.completed is true */
                            'none' }}>   
                            
        {/* Display title */}
        <span style={{ cursor: 'pointer' }}>{ todo.title }</span>
        
        {/* Display delete button */}
        <button>
            <i className="fas fa-trash-alt" />
        </button>

    </div>
  )
}

export default TodoItem