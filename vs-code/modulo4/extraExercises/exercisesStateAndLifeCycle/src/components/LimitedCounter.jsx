import { useState } from "react";

const LimitedCounter = () => {
    const [ count, setCount] = useState(0)

    const handleCountMore = () =>{
        if(count >= 10){
            setCount('Error: nao pode passar de 10 a contagem!')

        }else{
            setCount(prevCount => prevCount + 1);
        }
    } 
    const handleCountLess = () =>{
        setCount(prevCount => prevCount - 1);
    } 

    return(
        <div>
            
            <button onClick={handleCountMore}>
                Incrementar
            </button>
            <button onClick={handleCountLess}>
                Decrementar
            </button>

            <h2>Your count: {count}</h2>
        </div>
    )

    
}

export default LimitedCounter
