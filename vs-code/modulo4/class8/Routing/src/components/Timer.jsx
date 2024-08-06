import { useState } from "react";

const Counter = () => {
    const [ count, setCount ] = useState(0)

    return(
        <div>
            <h1>Your count is: {count}</h1>
            <button onClick={() => (setCount(count +1))}>Incrementar</button>
        </div>
    )
}

export default Counter