import { create } from "zustand";
import { addtodo } from "../features/todoSlice";

export const todoStore = create((set, get)=>({
    todos: [],

    addtodo:(text)=>{
        set((state)=>({
            todos: [...state.todos, {id:Date.now(), text, done: false}]
        }))
    },
    updatetodo:(id)=>{
        set((state)=>({
            todos: state.todos.map((todo)=> todo.id === id ? {...todo, done: !todo.done}: todo)
        }))
    }
}))


// import { create } from "zustand"


// export const useTodoStore = create((set, get)=>({
//     todos: [],

//     addTodo: (text)=>
//     set((state)=>({
//         todos: [...state.todos, {id: Date.now(), text, done: false}]
//     })),

//     ToggleTodo:(id)=>
//         set((state)=>({
//             todos: state.todos.map((todo)=> todo.id === id ? {...todo, done: !todo.done}: todo)
//     })),
//     DeleteTodo: (id)=>
//         set((state)=>({
//             todos: state.todos.filter((todo)=> todo.id !== id)
//     })),
//     reset: ()=> set({todos: []}),

//     totalCount: ()=> get().todos.length

// }))