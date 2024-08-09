import axios from "axios";

const GetUser = () => {

    const request = () => {
        axios.get('https://reqres.in/api/users/2')
        .then(response => {
            console.log('Dados do usuário:',response.data)
            alert('Usuário recuperado:' + JSON.stringify(response.data))
        }) 
        .catch(error => {
            console.log('Erro :',error.data)
            alert('Erro ao recuperar dados do usuario:' + JSON.stringify(response.data))
        })    
    }

    return(

        <button onClick={request}>
            Recuperar dados
        </button>
    )

}

export default GetUser