import { useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const Container  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    background-color: lightblue;
    border-radius: 3px;
`

const Label = styled.label`
    text-align: center;
    font-weight: bolder;
    color: #555;
`

const TranslatedText = styled.p`
    background-color: aliceblue;
    font-weight: 500;
    text-align: center;
`

const LanguageTranslator = () => {

    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('en')
    const [targetLang, setTargetLang] = useState('pt')

    const translateText = async () => {
        try{
            const response = await axios.get('https://api.mymemory.translated.net/get',
                {params : {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`
                }}
            )

            setTranslatedText(response.data.responseData.translatedText)

            console.log(response.data.responseData.translatedText)
        }catch(error){
            console.log(error)
        }
    }


    return(
        <Container>

            <div>
                <Label>Select Language:</Label>
                <select value={sourceLang} onChange={(event)=> setSourceLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="pt">Portuguese</option>
                    <option value="sp">Spanish</option>
                    <option value="ge">German</option>
                    <option value="it">Italian</option>
                </select>
            </div>
            <div>
                <Label>Target Language:</Label>
                <select value={targetLang} onChange={(event)=> setTargetLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="pt">Portuguese</option>
                    <option value="spa">Spanish</option>
                    <option value="ger">German</option>
                    <option value="ita">Italian</option>
                </select>
            </div>

            <input type="text" value={text} placeholder="Informe o texto a ser traduzido..." onChange={(event) => setText(event.target.value)}/>

            <button onClick={translateText}>Translate</button>

            {translateText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
       
    )
}

export default LanguageTranslator