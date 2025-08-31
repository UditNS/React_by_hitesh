import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid -> generated unique id 

const initialState = {
    todos : [{id: 1, text: "hey"}]
}

export const todoSlice = createSlice({
    name: "todo", // this name will be displayed on the redux chrome extension
    initialState, // everySlice has a initialstate
    reducers: { //reducer consist of properties and functions
        addTodo: (state, action) => {// In redux i will always get access to state and action
            // state gives access to the initialState of todos (ref: line-5)
            // action give access to some parameter which are needed in the function to execute some task
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
        },// In context api we only do function declartion but in redux we define the function here
        updateTodo : (state, action) => {
            state.todos.map((todo) => todo.id === action.payload ? todo.text = action.payload : todo)
        }
            
        
    }
}) 

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions //we need these in components

export default todoSlice.reducer // why this -> to give access of all the reducer to the store