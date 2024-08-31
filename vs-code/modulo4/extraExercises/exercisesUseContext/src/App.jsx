import ThemeContext from "./context/ThemeContext"
import ThemeButton from "./context/ThemeButton"
import AuthContext from './context/AuthContext'
import UserStatus from "./components/UserStatus"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState('light')
  const [isLogged, setIsLogged] = useState(false)
  
  return (
    <>
      {/* <ThemeContext.Provider value={{theme,setTheme}}>
        <ThemeButton/>
      </ThemeContext.Provider>   */}
      <AuthContext.Provider value={{isLogged, setIsLogged}}>
        <UserStatus/>
      </AuthContext.Provider>
    </>
  )
}

export default App
