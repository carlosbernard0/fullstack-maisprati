import { useState } from "react";

function Text(){
    const [text, setText] = useState();

    return(
        <div>
            <textarea name="text" id="text" onChange={(e)=>setText(e.target.value)}></textarea>
            <p>{text}</p>
        </div>
    )
}

export default Text;