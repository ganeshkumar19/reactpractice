import React, { useContext } from 'react'
import { ThemeContext } from './App'


const User = () => {
    const {theme} = useContext(ThemeContext)

    const textstyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
    }
  return (
    <div style={textstyle}>User</div>
  )
}

export default User