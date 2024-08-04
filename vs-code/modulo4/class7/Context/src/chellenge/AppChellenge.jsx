// crie um aplicativo que permite aos usuarios escolher e salvar suas preferencias de idioma e tema, usando useContext

import { useContext,createContext,useState} from "react";
const PreferencesContext = createContext()

const AppChellenge = () => {
    const [preferences, setPreferences] = useState({theme:'light', language: 'ptBR'});
    
    const toggleTheme = ()=>{
        setPreferences(currentPreferences => ({
            ...currentPreferences, 
            theme: currentPreferences.theme=== 'light' ? 'dark' : 'light'
        }))
    }

    const changeLanguage = (language) =>{
        setPreferences(currentPreferences => ({
            ...currentPreferences, language:language
        })) 
    }

    return(
        <PreferencesContext.Provider value={{preferences, toggleTheme, changeLanguage}}>
            <div>
                <Toolbar/>
                <button onClick={toggleTheme}>Trocar Tema</button>
                <button onClick={()=>changeLanguage('ptBr')}>PT-BR</button>
                <button onClick={()=>changeLanguage('en')}>EN</button>
            </div>
        </PreferencesContext.Provider>
    )


    

}

function Toolbar(){
    const {preferences} = useContext(PreferencesContext)

    return(
        <div style={{background: preferences.theme === 'dark'? 'grey':'blue',
            color: preferences.theme === 'dark'? 'white': 'black'
        }}>
            Tema Utilizado - {preferences.theme}, Idioma: {preferences.language}
        </div>
    )
}

export default AppChellenge