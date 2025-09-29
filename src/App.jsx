import React, { createContext, useState } from 'react'
import Counter from './features/Counter'
import Todolist from './features/Todolist'
import { CounterProvider } from './context/counterContext'
import Contextcount from './Contextcount'
import Apipractice from './Apipractice'
import Simpleform from './Simpleform'
import RHFform from './RHFform'
import UsememoEx from './UsememoEx'
import UseCallbackEx from './UseCallbackEx'
import Container from './Container'
import Profile from './Profile'
import Searchbox from './SearchBox'

export const ThemeContext = createContext()


const App = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = ()=>{
    setTheme((curr)=> curr==='light' ? 'dark': 'light')
  }

  return (
    // <UseCallbackEx/>
    // <ThemeContext.Provider value={{theme}}>
    //   <button onClick={toggleTheme}>Toggle</button>
    //   <h1>app component</h1>
    //   <Container/>

    //   {/* // <CounterProvider>
    // // <Todolist/>
    // // <Contextcount/>
    // // </CounterProvider>
    // // <Apipractice/>
    // // <Simpleform/>
    // // <RHFform/>
    // // <UsememoEx/> */}
    // </ThemeContext.Provider>
    // <>
    // <Simpleform/>
    // <Profile/>
    // </>
    <Searchbox/>
  )
}

export default App