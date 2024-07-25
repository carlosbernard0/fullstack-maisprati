import { useState } from "react";
import styles from './NavegationPages.module.css'

    const conteudos = [
        ["Conteúdo 0", "Conteúdo 1", "Conteúdo 2"],
        ["Conteúdo 3", "Conteúdo 4", "Conteúdo 5"],
        ["Conteúdo 6", "Conteúdo 7", "Conteúdo 8"],
    ];

function NavegationPages(){

    const [estadoAtual, setEstado] = useState(0)


    return(
        <>
            <div>
                <header>
                <img src="" alt="" /> 
                <h1>AULA 36 - React.Js</h1> 
                <p>Exercício para treinar o useState</p> 
                </header>
            </div>

            <div id="abas">
                <nav>
                    <button onClick={() => setEstado(0)}>Page1</button>
                    <button onClick={() => setEstado(1)}>Page2</button>
                    <button onClick={() => setEstado(2)}>Page3</button>
                
                </nav>
            </div>

            <div id="conteudo">
                <ul>
                    {conteudos[estadoAtual].map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default NavegationPages