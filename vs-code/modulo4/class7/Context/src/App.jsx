import { createContext, useContext, useState } from "react"
import MyChildren from "./components/Children"
import { MyProvider } from "./components/Context"

const ThemeContext = createContext({ theme: 'light', toggleTheme: ()=>{}}) 


function App() {
  
  const [ theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }
  

  return (
    <>
      {/* <MyProvider>
        <MyChildren/>  
      </MyProvider>  */}
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div>
            <Toolbar/>
            <button onClick={toggleTheme}>Trocaar o tema</button>
          </div>
      </ThemeContext.Provider>
    </>
  )
}

function Toolbar(){
  const {theme} = useContext(ThemeContext)

  return(
    <div>
      Tema utilizado - {theme}
    </div>
  )
}

export default App
