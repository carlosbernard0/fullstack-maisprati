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
import UserPreferencesContext from "./context/UserPreferencesContext"
import ViewModeSwitcher from "./components/ViewModeSwitcher"
import ItemList from "./components/ItemList"
import NotificationSettingsContext from "./context/NotificationSettingsContext"
import NotificationToggle from "./components/NotificationToggle"
import NotificationStatus from "./components/NotificationStatus"
import DynamicThemeContext from "./context/DynamicThemeContext"
import ThemeSelector from "./components/ThemeSelector"
import ThemedComponent from "./components/ThemedComponent"
import UserProfileContext from "./context/UserProfileContext"
import Profile from "./components/Profile"
import EditProfile from "./components/EditProfile"

function App() {
  // const [theme, setTheme] = useState('light')
  // const [isLogged, setIsLogged] = useState(false)
  // const [productList, setProductList] = useState([])
  // const [goCart, setGoCart] = useState(false)
  // const [cartItems, setCartItems] = useState([])
  // const [language, setLanguage] = useState('en')
  // const [viewMode, setViewMode] = useState('list')
  // const [ notificationIsActive, setNotificationIsActive] = useState(false)
  const [ userProfile, setUserProfile] = useState({name: '', mail: '', phone: ''})
  
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
      {/* <LanguageContext.Provider value={{language,setLanguage}}>
        <LanguageSwitcher/>
        <Greeting/>
      </LanguageContext.Provider> */}
      {/* <UserPreferencesContext.Provider value={{viewMode,setViewMode}}>
          <ViewModeSwitcher/>
          <ItemList/>
      </UserPreferencesContext.Provider> */}
      {/* <NotificationSettingsContext.Provider value={{notificationIsActive,setNotificationIsActive}}>
          <NotificationToggle/>
          <NotificationStatus/>
      </NotificationSettingsContext.Provider> */}
      {/* <DynamicThemeContext.Provider value={{theme,setTheme}}>
          <ThemedComponent/>         
      </DynamicThemeContext.Provider> */}
      <UserProfileContext.Provider value={{userProfile,setUserProfile}}>
          <Profile/>
          <EditProfile/>
      </UserProfileContext.Provider>

    </>
  )
}

export default App
