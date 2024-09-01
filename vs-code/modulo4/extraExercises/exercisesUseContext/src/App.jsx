import ThemeContext from "./context/ThemeContext"
import ThemeButton from "./context/ThemeButton"
import AuthContext from './context/AuthContext'
import UserStatus from "./components/UserStatus"
import { useState } from "react"
import CartContex from "./context/CartContext"
import ProductList from "./components/ProductList"
import AddProductList from "./components/AddProductList"
import Cart from "./components/Cart"
import LanguageContext from "./context/LanguageContext"
import LanguageSwitcher from "./components/LanguageSwitcher"
import Greeting from "./components/Greeting"

function App() {
  // const [theme, setTheme] = useState('light')
  // const [isLogged, setIsLogged] = useState(false)
  const [productList, setProductList] = useState([])
  const [goCart, setGoCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [language, setLanguage] = useState('en')
  
  return (
    <>
      {/* <ThemeContext.Provider value={{theme,setTheme}}>
        <ThemeButton/>
      </ThemeContext.Provider>   */}
      {/* <AuthContext.Provider value={{isLogged, setIsLogged}}>
        <UserStatus/>
      </AuthContext.Provider> */}
      {/* <CartContex.Provider value={{productList,setProductList,setGoCart, cartItems, setCartItems}}>
          {goCart ? <ProductList/>: <AddProductList/>}
          {cartItems.length > 0 && <Cart />}
      </CartContex.Provider> */}
      <LanguageContext.Provider value={{language,setLanguage}}>
        <LanguageSwitcher/>
        <Greeting/>
      </LanguageContext.Provider>

    </>
  )
}

export default App
