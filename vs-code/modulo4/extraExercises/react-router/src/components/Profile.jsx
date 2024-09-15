import ProfileContext from "../context/ProfileContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { profileDetails} = useContext(ProfileContext)
    const navigate = useNavigate()

    return(
        <div>
            <h2>Your info</h2>
            <p>Your email: {profileDetails.email}</p>
            <p>Your password: {profileDetails.password}</p>
            
            <br />
            <button onClick={()=> navigate('/')}>Log out</button>
        </div>
    )
}

export default Profile;