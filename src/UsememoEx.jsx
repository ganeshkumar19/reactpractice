import React, { useMemo, useState } from 'react'

const UsememoEx = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const squarevalue = useMemo(()=>{
    console.log('calculating')
    return count * count
  }, [count])
  return (
    <div>
      <p>{count}</p>
      <p>{squarevalue}</p>
      <button onClick={()=> setCount((prev)=> prev+ 1)}>increment</button>
      <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder='type something'/>
    </div>
  )
}

export default UsememoEx