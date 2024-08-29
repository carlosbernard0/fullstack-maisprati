import { useState } from "react"


const ToggleText = () => {
    const [visible, setVisible] = useState(false);

    const text = 'Hello my friend!';

    const changeVisible = () => {
        if(!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }


    return(
        <div>   
            <button onClick={changeVisible}>Clique para ver</button>
            {visible ? <p style={{display: 'block'}}>{text}</p> : <p style={{display: 'none'}}>{text}</p>}
        </div>
    )
}

export default ToggleText