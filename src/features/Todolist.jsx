import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './todoSlice'

const Todolist = () => {
    const [inputValue, setInputValue] = useState('')
    const todos = useSelector((state)=> state.todos.todos)
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        console.log(inputValue)
        if(inputValue !== ''){
            dispatch((addTodo(inputValue)))
            setInputValue('')
        }
    }

  return (
    <div>
        <input type='text' placeholder='enter new todo' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={handleAdd}>Add</button>

        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}><span style={{textDecoration: todo.done ? 'line-through': 'none', cursor: 'pointer'}} 
                   onClick={()=> dispatch(updateTodo(todo.id))}>
                    {todo.text}
                </span>
                <button onClick={()=> dispatch(deleteTodo(todo.id))}>❌</button>
                </li>
            ))}

        </ul>
    
    </div>
  )
}

export default Todolist