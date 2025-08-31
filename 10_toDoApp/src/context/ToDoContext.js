import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id : 1,
            todoMessage : 'hello',
            completed : false
        }   
    ],
    addTodo : (todoMessage) => {},
    updateTodo : (id, todoMessage) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

export const ToDoProvider = ToDoContext.Provider

export const useToDo = () => {
    return useContext(ToDoContext)
}


// by default todo -> array of todo
// functionality
/* 
- read todo
- edit todo
- add todo
- delete todo
- togggle todo -> complete/ incomplete
*/

// context api is used for smaller app for large scale app we need to use redux