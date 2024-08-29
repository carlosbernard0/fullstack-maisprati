import { useState } from "react"
import axios from 'axios'


const Form = () => {

    const [user,setUser] = useState({
        name: '',
        mail: '',
        password: ''
    })

    const handleChange =(event) => {
        const { name, value} = event.target

        setUser((prevUser) => ({
            ...prevUser, [name]:value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users' ,user)
        
            console.log(response.data)

            alert('Usuario criado com sucesso! id:'+ response.data);

        } catch (error) { 
            console.error(error)
            
        }
    }

    return(
        <form onSubmit={handleSubmit}>

                <label htmlFor="name">
                    Name:
                    <input name="name" onChange={handleChange} value={user.name} type="text" />
                </label>
                <br />

                <label htmlFor="mail">
                    Mail:
                    <input name='mail' onChange={handleChange} value={user.mail} type="mail" />
                </label>
                <br />

                <label htmlFor="password">
                    Password:
                    <input name="password" onChange={handleChange} value={user.password} type="password" />
                </label>

                <button type="submit">Invite</button>
                
        </form>
    )
}

export default Form