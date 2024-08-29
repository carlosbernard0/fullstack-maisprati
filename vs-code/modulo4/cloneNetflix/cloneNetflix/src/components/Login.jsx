import styled from 'styled-components'
import '../styled/Login.module.css'
import Nav from './Nav'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    

`

const Logo = styled.img`
    padding: 10px;
    justify-content: center;
    width: 20%;
    height: auto;
    max-width: 400px; 
    min-width: 300px; 

    @media (max-width: 800px) {
        min-width: 200px;
    }
        
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
`

const ContainerLogin = styled.div`
    width: 100%;
      
`
const ContainerInfo = styled.div`
    width: 100%;
    background-color: black;
    padding-bottom: 100px;
    
      
`

const Form = styled.form`
    padding: 30px;
    width: 40%;
    margin: 0 auto;
    background-color: #000000cc;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap: 20px;
    text-align: center;

    @media (max-width: 800px){
        width: 50%;

    }

    @media (max-width: 600px){
        width: 100%;
        display: grid;
        

    }
`
const TitleSingIn = styled.h1`
    text-align: left;
`

const Input = styled.input`
    color: white;
    background-color: #000000cc;
    padding: 15px;
    width: 100%;
`

const ButtonSignIn = styled.button`
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;

   
    &:hover{
        background-color: #af0000 ;
        transition: .5s;
    }
`

const ButtonSignInCode = styled.button`
    background-color: #ffffff58;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;

    &:hover{
        background-color: #ffffff49 ;
        transition: .5s;
    }
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 400;

    &:hover{
        color: #B6B4B4;
        text-decoration: underline;
    }
`

const Info = styled.div`
    padding: 30px;
    width: 30%;
    margin: 0 auto;
    background-color: black;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap: 20px;
    text-align: center;

    @media(max-width: 600px){
        margin: 0;
        width: 100%;
        display: grid
     
    }
`

const InfoMessege = styled.p`
    text-align: left;
    color: #ffffff97
`

const InfoMessegeExtra = styled.p`
    color: #ffffff97;
    font-size: small;
    text-align: left;
`



const InputCheck = styled.input`
    background-color: black;
    padding-right: 5px;

    &:active{
        background-color: white;
        color: black;
    }
`

const Hidden = styled.div`
    
    background-color: black;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    gap: 20px;
    text-align: center;
    visibility: hidden;
`



const Footer = styled.footer`
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const ContainerInfoFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    gap: 15px;


    
`

const LinkFooter = styled.a`
    color: #B6B4B4;
    font-weight: 400;
`

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    @media(max-width: 600px){
        grid-template-columns: repeat(3, 1fr);

    }
`

const ItemList = styled.li`
    list-style-type: none;
    font-size: .9rem;
    padding: 5px;
`

const Language = styled.select`
    margin-bottom: 30px;
    max-width: 100px;
    background-color: black;
    border-radius: 5px;
    color: white;
`


const focused = {
    padding: '10px'
};



const Login = () => {
    const [hasFocus, setHasFocus] = useState(false);
    
    const handleFocus = () =>{
        setHasFocus(true)
    } 

    const handleBlur = () => {
        setHasFocus(false)
    }

    const showHidden =  (event) => {
        event.preventDefault()
        document.getElementById('hidden').style.visibility ='visible'
    }

    


    return(
        <Container>
            <Nav>
                <Logo src={"./src/images/logo.png"} alt="netflix logo"/>
            </Nav>
            <Main>
                <ContainerLogin>
                    <Form>
                        <TitleSingIn>Sing In</TitleSingIn>
                        <label>
                            <Input type="email" style={focused} placeholder="Email or mobile number" onFocus={handleFocus} onBlur={handleBlur} className={hasFocus ? 'focused' : ''}/>
                        </label>
                        <label>
                            <Input type="password" placeholder="Password" onFocus={handleFocus} onBlur={handleBlur} className={hasFocus ? {focused} : ''}  />
                        </label>
                        <ButtonSignIn>Sign In</ButtonSignIn>
                        <h3 className="or">OR</h3>
                        <ButtonSignInCode className="button-sign-in-code">Use a Sing-In Code</ButtonSignInCode>
                        <Link href="https://www.netflix.com/br-en/LoginHelp">Forgot password?</Link>

                    </Form>
                </ContainerLogin> 
                <ContainerInfo>
                    <Info>
                        <label>
                            <InputCheck type="checkbox"/>
                            <p>Remember me</p>

                        </label>
                        <InfoMessege>New to Netflix? <Link>Sign up now.</Link></InfoMessege>

                        <InfoMessegeExtra>This page is protected by Google reCAPTCHA to ensure youre not a bot. <a href="#" onClick={(event)=> showHidden(event)}>Learn more</a></InfoMessegeExtra>
                    
                        <Hidden id='hidden'>
                            <InfoMessegeExtra style={{textAlign: 'justify'}}>
                                The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy">
                                    Privacy
                                     Policy
                                </a> and <a href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, 
                                 and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                            </InfoMessegeExtra>
                        </Hidden>
                    </Info>
                </ContainerInfo>              
            </Main>
            <Footer>
                <ContainerInfo>
                    <ContainerInfoFooter>
                        <InfoMessege>Questions? <LinkFooter href="tel:08005913517" style={{textDecoration: 'none'}}>0800 591 3517</LinkFooter></InfoMessege>
                        <List>
                            <ItemList><LinkFooter href='#'>FAQ</LinkFooter></ItemList>
                            <ItemList><LinkFooter href='#'>Help Center</LinkFooter></ItemList>
                            <ItemList><LinkFooter href='#'>Terms of Use</LinkFooter></ItemList>
                            <ItemList><LinkFooter href='#'>Privacy</LinkFooter></ItemList>
                            <ItemList><LinkFooter href='#'>Cookie Preferences</LinkFooter></ItemList>
                            <ItemList><LinkFooter href='#'>Corporate Information</LinkFooter></ItemList>
                        </List>
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/translation.png" alt="translation"/>
                        <Language>
                            <option value="EN">English</option>
                            <option value="PT">Portuguese</option>
                        </Language>
                    </ContainerInfoFooter>
                </ContainerInfo>
                
            </Footer>
        </Container>
    )
}

export default Login