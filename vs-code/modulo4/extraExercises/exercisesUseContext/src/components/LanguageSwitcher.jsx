import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const {language, setLanguage} = useContext(LanguageContext)

    const changePortuguese = () =>{
        setLanguage('pt')
    }
    
    const changeEnglish = () =>{
        setLanguage('en')
    }



    return(
        <div>
            <h1>Mude seu idioma</h1>
            <p>idioma atual: {language}</p>
            <button onClick={changePortuguese}>Portuguese</button>
            <button onClick={changeEnglish}>English</button>
        </div>
    )
}

export default LanguageSwitcher