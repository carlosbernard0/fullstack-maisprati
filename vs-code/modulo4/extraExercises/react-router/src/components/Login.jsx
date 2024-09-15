import { Link } from "react-router-dom"
import ProfileContext from "../context/ProfileContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { profileDetails, setProfileDetails} = useContext(ProfileContext)
    const [ profileLoginDetails, setProfileLoginDetails] = useState({
        email: "", password: ""
    })
    const [ isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()
    
    const handleClick = () => {
        if(profileDetails.email == profileLoginDetails.email && profileDetails.password == profileLoginDetails.password){
            setIsLogged(true)
        }else{
            console.log('nao foi possivel iniciar o download!!!');
            console.log(profileDetails)
            console.log(profileLoginDetails)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(isLogged){
            navigate('/profile')
        }else{
            navigate('/')
            console.log("Usuario nao logado!")
        }

    }




    return(
        <div style={{backgroundColor: 'lightblue'}}>
            <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name={profileLoginDetails.email} onChange={(event)=> setProfileLoginDetails({...profileLoginDetails, email:event.target.value })}/>
                </label>
                <label>
                    Password:
                    <input type="text" name={profileLoginDetails.password} onChange={(event)=> setProfileLoginDetails({...profileLoginDetails, password:event.target.value })}/>
                </label>
                <button type="submit" onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login