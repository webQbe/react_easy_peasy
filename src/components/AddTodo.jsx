/* Form to add new todos */
import React, { useState } from 'react'

const AddTodo = () => {

    // Manage form input state
    const [title, setTitle] = useState('')

  return (
    <div>
        <form>
            {/* Render input field to type todo title */}
            <input 
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)} // update title state as you type
                placeholder='Add todo title...'
            />
            <input type="submit" value='Add Todo' />
        </form>
    </div>
  )
}

export default AddTodo