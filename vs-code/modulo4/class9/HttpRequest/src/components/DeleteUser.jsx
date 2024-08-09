import axios from "axios"
import { useState } from "react"

const DeleteUser = () => {
    const sendDelete = () => {
        axios.delete('https://reqres.in/api/users/2')
        .then(response => {
            console.log('Usuario deletado: ', response.status)
            alert('Usuario : ' + JSON.stringify(response.status))
        })
        .catch(error => { 
            console.log(error.data)
        })
    }

    return(
        <button onClick={sendDelete}>Deletar User</button>
    )
}

export default DeleteUser