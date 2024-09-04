import { useContext } from "react";
import UserProfileContext from "../context/UserProfileContext";

const Profile = () => {
    const {userProfile} = useContext(UserProfileContext)

    return(
        <div>
            <h2>Your Info:</h2>

            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.mail}</p>
            <p>Phone: {userProfile.phone}</p>

        </div>
    )
}

export default Profile