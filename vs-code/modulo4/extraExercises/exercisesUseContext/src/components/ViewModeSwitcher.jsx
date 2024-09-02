import { useContext } from "react";
import UserPreferencesContext from "../context/UserPreferencesContext";

const ViewModeSwitcher = () => {
    const { viewMode, setViewMode} = useContext(UserPreferencesContext)

    const changeToList = () => {
        setViewMode('list')
    }
    const changeToGrid = () => {
        setViewMode('grid')
    }



    return(
        <div>
            <h2>Your mode is {viewMode}</h2>

            <p>Change a mode...</p>
            <button onClick={changeToList}>List</button>
            <button onClick={changeToGrid}>Grid</button>

        </div>
    )
}

export default ViewModeSwitcher