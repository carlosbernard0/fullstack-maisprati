import axios from "axios"
import { useState } from "react"

const PutUser = () => {
    const [email , setEmail ] = useState()
    const sendPut = () => {
        axios.put('https://reqres.in/api/users/2', { email: email})
        .then(response => {
            console.log('Dados do usuario: ', response.data)
            alert('Usuario recuperado: ' + JSON.stringify(response.data))
        })
        .catch(error => { 
            console.log(error.data)
        })
    }

    const handleChange = (event) =>{
        setEmail(()=> (event.target.value))
    }

    return (
        <div>
            Email:
            <input name='email' type="text" onChange={handleChange}/>

            <button onClick={sendPut}>
                Recuperar dados
            </button>

        </div>   
    )
}

export default PutUser