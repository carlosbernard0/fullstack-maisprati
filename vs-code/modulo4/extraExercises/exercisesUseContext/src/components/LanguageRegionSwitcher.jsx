import { useContext, useState } from "react";
import AdvancedLanguageContext from "../context/AdvancedLanguageContext";

const LanguageRegionSwitcher = () => {
    const {preferences, setPreferences} = useContext(AdvancedLanguageContext)
    const [language, setLanguage] = useState(preferences.language)
    const [region, setRegion] = useState(preferences.region)

    const handleChange = (event) => {
        if(event.target.value == 'EN'){
            setPreferences({language: event.target.value, region: 'North America'})

        }else if(event.target.value == 'PT'){
            setPreferences({language: event.target.value, region: 'South America'})

        }else if(event.target.value == 'ITA'){
            setPreferences({language: event.target.value, region: 'Europe'})
        }
    }

    return(
        <div>
            <h1>Change your preferences</h1>
            <select onChange={handleChange}>
                <option value="EN">English</option>
                <option value="PT">Portuguese</option>
                <option value="ITA">Italian</option>
            </select>
        </div>
    )
}

export default LanguageRegionSwitcher