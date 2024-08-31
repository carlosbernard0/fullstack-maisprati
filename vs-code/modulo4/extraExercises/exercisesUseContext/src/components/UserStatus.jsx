import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const UserStatus = () => {
    const {isLogged} = useContext(AuthContext)

    return(
        <div>
            <h2>Your Situation: isLogged? {isLogged ? "Yes": "No"}</h2>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )

}

export default UserStatus