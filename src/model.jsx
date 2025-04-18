/* Easy Peasy model */
import { action, thunk } from "easy-peasy"
import { v4 as uuidv4 } from 'uuid'

// Defines the initial state with a todos array
export default {
    todos: [],
    
    /* Thunks */
    // Thunk to fetch todos from API
    fetchTodos: thunk(async actions => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const todos = await res.json()
        actions.setTodos(todos)
    }),

    /* Actions */
    // Set fetched todos
    setTodos: action((state, todos) => {
        state.todos = todos
    }),

    // Define add action that accepts a todo object
    add: action((state, todo) => {
        // Generate unique ID with uuid.v4() & assign it to todo.id
        todo.id = uuidv4()
        // Add the new todo (without modifying original array directly)
        state.todos = [...state.todos, todo]
    }),
    // Define toggle action
    toggle: action((state, id) => {
                // Find the matching todo
                const todo = state.todos.find(todo => todo.id === id)
                if (todo) {
                    // Flip its completed status
                    todo.completed = !todo.completed 
                    /* Mutation allowed thanks to Immer.js  */
                }
            }),
    // Define remove action
    remove: action((state, id) => { // Take current state & id
        
                // Replace state.todos with the new filtered array
                state.todos = state.todos 
                                .filter(todo => todo.id !== id) // filter out the todo with the matching id

                /* Easy Peasy uses Immer, you can reassign state.todos like this directly inside an action. */
            })
}