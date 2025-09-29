import React, { useCallback, useState } from 'react'

const Child = React.memo(({handleclick})=>{
  console.log('child rendered')
  return <button onClick={handleclick}>increment</button>
})

const UseCallbackEx = () => {
  const [count, setCount] = useState(0)

  const handleclick = useCallback(()=>{
    console.log('btn clicked')
    setCount((prev)=> prev+ 1)
  }, [])
  
  return (
    <div>
      <p>{count}</p>
      <Child handleclick={handleclick}/>
    </div>
  )
}

export default UseCallbackEx