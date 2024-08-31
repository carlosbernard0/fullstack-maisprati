import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LogoutButton = () => {
    const {setIsLogged} = useContext(AuthContext)
    
    const logout = () => {
        setIsLogged(false)
    }

    return(
        <div>
            <button onClick={logout}>
                Deslogar
            </button>
        </div>
    )

}

export default LogoutButton