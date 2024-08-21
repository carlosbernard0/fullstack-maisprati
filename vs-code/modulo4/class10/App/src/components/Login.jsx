import { useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: lightblue;
    border: 1px solid #1f1f1f55;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Messege = styled.div`
    padding: 10px;
    

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    
`
const H1 = styled.h1`
    padding: 5px;
`

const P = styled.p`
    padding: 5px;
`

const Input = styled.input`
    color: black;
`

const Label = styled.label`
`

const Button = styled.button`
    color: black;
    font-weight: bolder;
    margin: 5px;
    padding: 0 10px;
    background-color: #00ffff40;
`

const Buttons = styled.div`
    color: black;
    font-weight: bolder;
    display: flex;
    justify-content: center;
`

const ContainerLogin = styled.div`
    display: flex;
    background-color: lightcyan;
    border: 1px solid #302f2f;
    border-radius: 5px;
`


const Login = () => {

    const [data, setData] = useState({
        name: '', mail:'', password:''
    })

    const handleChange = (event) => {
        const {value, name} = event.target;
        setData(prevData => ({
            ...prevData, [name]: value
        }))
    }
    
    const register = (event) =>{ 
        event.preventDefault()
        
        if(data.password && data.name && data.mail){
            alert('Você deve preencher todos os campos!!')
        }
        console.log(data)
    }


    const login = (event) => {
        event.preventDefault()

        console.log(data)
    }

    return(
        <Container>
            <ContainerLogin>
            <Messege>
                <H1>
                    Welcome to My APP
                </H1>
                <P>
                    Aqui você pode fazer o login de maneira super rapida!!
                </P>
            </Messege>
            <Form onSu>
                <Label>Digite seu nome</Label>
                <Input type='text' name="name" value={data.name} onChange={handleChange}/>
                <Label>Digite seu email</Label>
                <Input type='email' name="mail" value={data.mail} onChange={handleChange}/>
                <Label>Digite sua senha</Label>
                <Input type='password' name="password" value={data.password} onChange={handleChange}/>
                <Buttons>
                    <Button onClick={login}>Login</Button>
                    <Button onClick={register}>Register</Button>
                </Buttons>
                
            </Form>
            </ContainerLogin>
            
        </Container>
    )
}

export default Login