import React, { useContext } from 'react'
import { CounterContext } from './context/counterContext'

const Contextcount = () => {
    const {count, setCount} = useContext(CounterContext)
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount((prev)=> prev+1)}>+</button>
        <button onClick={()=> setCount((prev)=> prev-1)}>-</button>
    </div>
  )
}

export default Contextcount