import { useState,useEffect } from "react"

const PersistentCounter = () => {

    const [ counter, setCounter] = useState(localStorage.getItem('counter'))


    useEffect(()=>{
        if(localStorage.getItem('counter') == null){
            setCounter(parseInt(0))
        }
        localStorage.setItem('counter',counter)
    },[counter])

    const deleteCounter = () => {
        localStorage.removeItem('counter')
    }



    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={() => {setCounter(parseInt(counter + 1))}}>Incrementar</button>
            <button onClick={() => {setCounter(parseInt(counter - 1))}}>Decrementar</button>
            <button onClick={()=>{deleteCounter()}}>Excluir Counter</button>
        </div>
    )
}

export default PersistentCounter