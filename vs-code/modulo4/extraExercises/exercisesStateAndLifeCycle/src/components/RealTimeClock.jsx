import { useState,useEffect } from "react"

const RealTimeClock = () => {
    const [hour, setHour] = useState('')

    useEffect(()=> {
        
        const timerId = setInterval(()=>{
            const todayDate = new Date()

            setHour(todayDate.getHours());
        }, 1000) 
        return() => {
            clearInterval(timerId)
            console.log('O timer foi zerado!!');
        }

    },[])

    return(
        <div>
            <h2>Hora: {hour}</h2>
        </div>
    )

}

export default RealTimeClock