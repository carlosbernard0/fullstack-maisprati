import { useState } from "react";
import "../ReactPages.css"

function ReactPages(){

    const [page, setPage] = ''
    const [itens, setItens] = useState([])


    const validatePage = () =>{
        let list = document.getElementById('list')
        if(page == 1){
            let li = document.createElement('li')
            li.textContent = 'React is extremely popular'
            list.appendChild(li)
            setItens(...itens,li)
            let li2 = document.createElement('li')
            li.textContent = 'React is extremely popular'
            list.appendChild(li2)
            setItens(...itens,li2)

            let li3 = document.createElement('li')
            li.textContent = 'React is extremely popular'
            list.appendChild(li3)
            setItens(...itens,li3)

            let li4 = document.createElement('li')
            li.textContent = 'React is extremely popular'
            list.appendChild(li4)
            setItens(...itens,li4)


            
        }
    }

    return(
        <div>
            <header>
                <figure><img src="../react-logo.png" alt="React Logo" /></figure>
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>
            </header>


            <main>
                <button onClick={(e) => {setPage(value)}} onChange={validatePage} value={1}>Why React?</button>
                <button onClick={(e) => {setPage(value)}} value={2}>Core Features</button>
                <button onClick={(e) => {setPage(value)}} value={3}>Related Resources</button>
                <button onClick={(e) => {setPage(value)}} value={4}>React vs JS</button>
                <ul>
                    {tarefas.map((tarefas) => (
                        <li>{tarefas}</li>
                    ))} 
                </ul>     
            </main>

        </div>
    )
}

export default ReactPages