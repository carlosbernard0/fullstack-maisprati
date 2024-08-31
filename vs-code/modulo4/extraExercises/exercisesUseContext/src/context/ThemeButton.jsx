import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const changeTheme = () =>{ 
        if(theme == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return(
        <div style={theme=='light' ?{backgroundColor:'lightyellow'} : { backgroundColor: 'gray'}}>
            Your Theme: {theme}

            <button onClick={changeTheme}>Change</button>
        </div>
    )
}

export default ThemeButton