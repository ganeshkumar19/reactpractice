import { createContext, useState } from "react";


export const ThemeContext = createContext()

export default themeProvider = ({children})=>{

    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>{
    setTheme((curr)=> curr==='light' ? 'dark': 'light')
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
             {children}
        </ThemeContext.Provider>
    )

}