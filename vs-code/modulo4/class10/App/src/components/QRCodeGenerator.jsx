import { useState } from "react"
import QRCode from 'qrcode.react'
import styled from "styled-components"

const Container = styled.div`
    background-color: burlywood;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Title = styled.h2`
    color: white;
    font-weight: 800;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Input = styled.input`
    padding: 5px;
    margin: 10px;
`

const QRContainer = styled.div`
    background-color: aliceblue;
    margin: 10px;
`

const QRCodeGenerator = () => {
    const [ link , setLink ] = useState('')
    
    const handleChange =  (event) => {
        setLink(event.target.value)
    }

    return(
        <Container>
            <Title>QR Code Generator</Title>
            <Input name="text" value={link} onChange={handleChange}/>

            <QRContainer>
                <QRCode value={link}/>
            </QRContainer>
        </Container>
    )
}

export default QRCodeGenerator