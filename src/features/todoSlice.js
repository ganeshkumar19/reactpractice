

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            state.todos.push({id: Date.now(), text: action.payload, done: false})
        },
        updateTodo: (state, action)=>{
            const todo = state.todos.find((todo)=> todo.id === action.payload)

            if(todo){
                todo.done = !todo.done
            }
        },
        deleteTodo: (state, action)=>{
           state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer