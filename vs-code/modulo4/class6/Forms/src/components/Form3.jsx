import { useState } from "react";
import Form from "./Form";

function Form3(){
    const [info ,setInfo] = useState({
        nome: '',
        email: '',
        senha: '',
        senhaConf: ''
    })

    
    const [ errors, setErrors] = useState({
        nome: '',
        email: '',
        senha: '',
        senhaConf: ''
    })

    const handlerChange = (event) => {
        const { value, name} = event.target 

        setInfo((prevInfo)=>({
            ...prevInfo, [name]: value
        }))
    }

    const handlerSubmit = (event) =>{
        event.preventDefault()
        
        const nome = info.nome
        const email = info.email
        const senha = info.senha
        const senhaConf = info.senhaConf
        

        let temArroba = false
        let temPonto = false
        for (let i = 0; i < email.length; i++) {
            if(email[i] == '@'){
                temArroba = true
            }

            if(email[i] == '.'){
                temPonto = true
            }  
        }

        

        if(!temArroba || !temPonto){
            setErrors(() =>({
                email: 'deve ser um email valido!'  
              }))
        }else if(senha.length < 8){
            setErrors(() =>({
              senha: 'a senha deve ter mais que 8 caracteres'  
            }))
        }else if(senha != senhaConf){
            setErrors(() =>({
                senhaConf: 'senha de confirmacao deve ser igual a senha'  
              }))
        }else if(!nome || !email || !senha || !senhaConf){
            alert('Preencha todos os campos!!')
        }else{
            setErrors(()=>({
                nome: '',
                email: '',
                senha: '',
                senhaConf: ''
            }))
            alert('sucesso! formulario submetido')
        }
            
    }

    return(
        <form onSubmit={handlerSubmit}>
            <label>
                Nome:
                <input type="text" name="nome" onChange={handlerChange} />
                {errors && <p>{errors.nome}</p>}
            </label>
            <label>
                Email:
                <input type="text" name="email" onChange={handlerChange} />
                {errors && <p>{errors.email}</p>}
            </label>
            <label>
                Senha:
                <input type="text" name="senha" onChange={handlerChange} />
                {errors && <p>{errors.senha}</p>}
            </label>
            <label>
                Confimar Senha:
                <input type="text" name="senhaConf" onChange={handlerChange} />
                {errors && <p>{errors.senhaConf}</p>}
            </label>
            <button>Confirmar</button>
        </form>
    )
}

export default Form3