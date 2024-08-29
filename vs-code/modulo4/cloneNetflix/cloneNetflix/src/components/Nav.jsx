import styled from "styled-components" 

const Nav = styled.nav`
margin-top: 15px;
margin-bottom: 15px;
margin-left: 80px;
display: flex;
justify-content: start;
width: 100%;
height: auto;


@media (max-width: 800px) {
    margin: 0;
    margin-top: 10px;
    justify-content: flex-start;
    align-items: center; /* Centraliza os itens */
    }

`


export default Nav