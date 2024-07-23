import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Você clicou aqui {count} vezes!</p>
            <button onClick={()=>{setCount(count +1)}}>Clique</button>
        </div>
    )
}


export default Counter