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
    // Define Easy Peasy action
    toggle: action((state, id) => {
                // Find the matching todo
                const todo = state.todos.find(todo => todo.id === id)
                if (todo) {
                    // Flip its completed status
                    todo.completed = !todo.completed 
                    /* Mutation allowed thanks to Immer.js  */
                }
            })
}