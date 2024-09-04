import { useContext, useState } from "react";
import UserProfileContext from "../context/UserProfileContext";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    background-color: lightblue;
    border: 1px solid black;
`

const EditProfile = () => {
    const {userProfile,setUserProfile} = useContext(UserProfileContext)
    const [name,setName] = useState(userProfile.name)
    const [mail,setMail] = useState(userProfile.mail)
    const [phone,setPhone] = useState(userProfile.phone)

    const handleSubmit = (event) => {
        event.preventDefault()

        setUserProfile({
            name: name,
            mail: mail,
            phone: phone
        })
    }


    return(
        <Form onSubmit={handleSubmit}>
            <label>
                Your name:
                <input type="text" onChange={(event)=> {setName(event.target.value)}} />
            </label>
            <label>
                Your Mail:
                <input type="email" onChange={(event)=> {setMail(event.target.value)}} />
            </label>
            <label>
                Your Phone:
                <input type="number" onChange={(event)=> {setPhone(event.target.value)}} />
            </label>
            <button type="submit">Invite</button>
        </Form>
    )
}

export default EditProfile