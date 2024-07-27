import { useState } from "react";
import "../ReactPages.css"

function ReactPages(){
    const content = [
        ['React is extremely popular','It makes building complex, interactive UIs a breeze','Its powerful & flexible','It has a very active and versatile ecosystem'],
        ['Components, JSX & Props','State','Hooks (e.g., useEffect())','Dynamic rendering'],
        ['text','text','text','text'],
        ['example','example','example','example']
    ];
    
    const [itens, setItens] = useState([])


    const showPage = (index) =>{
        setItens(content[index]);            
        
    }

    return(
        <div>
            <header>
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>
            </header>


            <main>
                <button onClick={()=>{showPage(0)}}>Why React?</button>
                <button onClick={()=>{showPage(1)}}>Core Features</button>
                <button onClick={()=>{showPage(2)}}>Related Resources</button>
                <button onClick={()=>{showPage(3)}}>React vs JS</button>
                <ul>
                    {itens.map((itens) => (
                        <li>{itens}</li>
                    ))} 
                </ul>     
            </main>

        </div>
    )

}
export default ReactPages