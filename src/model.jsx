/* Easy Peasy model */

import { action } from "easy-peasy"

// Defines the initial state with a todos array
export default {
    todos: [
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
    ],
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