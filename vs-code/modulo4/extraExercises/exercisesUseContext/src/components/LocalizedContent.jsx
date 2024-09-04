import { useContext } from "react";
import AdvancedLanguageContext from "../context/AdvancedLanguageContext";

const LocalizedContent = ()=>{
    const { preferences } = useContext(AdvancedLanguageContext)

    return(
        <div>
            <h4>Your Laguage is {preferences.language}</h4>
            <h4>Your Region is {preferences.region}</h4>
        </div>
    )
}

export default LocalizedContent