import { useState, useEffect } from "react";


function TitleUpdater(){
    const [ number, setNumber] = useState(0)

    useEffect(()=>{
        document.title = number
    },[number])
        

    return(
        <div>
            <button onClick={()=>setNumber(number => number+1)}>Incrementar</button>
            <button onClick={()=>setNumber(number => number-1)}>Decrementar</button>
        </div>
    )

}

export default TitleUpdater