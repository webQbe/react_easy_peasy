/* Form to add new todos */
import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'

const AddTodo = () => {

    // Manage form input state
    const [title, setTitle] = useState('')

    // Pull add action
    const add = useStoreActions(actions => actions.add)

  return (
    <div>
        <form
          onSubmit={e => {
            e.preventDefault() // Prevent page reload
            // Call add action to generate a unique ID & add new todo to global state
            add({
              title,
              completed: false
            })
          }}
        >
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