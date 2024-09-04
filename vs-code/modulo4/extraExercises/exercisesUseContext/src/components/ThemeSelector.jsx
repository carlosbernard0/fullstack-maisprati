import { useContext } from "react";
import DynamicThemeContext from "../context/DynamicThemeContext";

const ThemeSelector = () => {
    const {setTheme} = useContext(DynamicThemeContext)

    return(
        <div>
            <h2>Select your theme Preference</h2>
            <button onClick={()=> {setTheme('light')}}>Light</button>
            <button onClick={()=> {setTheme('dark')}}>Dark</button>
        </div>
    )
}

export default ThemeSelector