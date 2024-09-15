import { useContext, useEffect } from "react";
import NavigationHistoryContext from "../context/NavigationHistoryContext";
import {useLocation} from 'react-router-dom'

const NavigationTracker = () => {
    const { history,setHistory} = useContext(NavigationHistoryContext)
    const location = useLocation()

    useEffect(() => {
        console.log(location.pathname)
    } ,[history])

    return(
        <div>
            {location.pathname}
        </div>
    )
}

export default NavigationTracker