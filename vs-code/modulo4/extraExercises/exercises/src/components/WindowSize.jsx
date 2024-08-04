import { useState,useEffect } from "react";
import debounce from 'lodash/debounce';

function WindowSize(){
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = debounce(()=>{
            setWindowSize(window.innerWidth)
        },200);

        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])   
    
    return(
        <div>
            <p>A largura atual é de {windowSize}px</p>
        </div>
    )
}

export default WindowSize