import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {

    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        <p>{count} hi</p>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter