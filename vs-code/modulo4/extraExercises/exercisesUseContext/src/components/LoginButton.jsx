import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginButton = () =>{ 
    const {setIsLogged} = useContext(AuthContext)


    const login = () => {
        setIsLogged(true)
    }

    return(
        <div>
            <button onClick={login}>
                Logar
            </button>
        </div>
    )

}

export default LoginButton
