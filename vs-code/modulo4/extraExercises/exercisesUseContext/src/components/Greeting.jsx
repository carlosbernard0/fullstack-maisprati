import { useContext, useState } from "react";
import LanguageContext from "../context/LanguageContext";

const Greeting = () => {
    const {language} = useContext(LanguageContext)
    
    const messegePt = 'Olá amigo, como você está??'

    const messegeEn = 'Hello my friend, how are you??'
    

    return(
        <div>
            <h1>{language== 'en' ? messegeEn : messegePt}</h1>
        </div>
    )
}


export default Greeting