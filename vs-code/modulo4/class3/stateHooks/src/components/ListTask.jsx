import { createElement, useState } from "react";

function ListTask (){
    const [tarefas, setTarefas] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTarefa = ()=>{
        setTarefas([...tarefas, inputValue])
        setInputValue('')

        document.getElementById('input').value = '' 
        
        
    }

    return(
        <div>
            <input id="input" type="text" onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={addTarefa}>Adicionar</button>

            <ul>
                {tarefas.map((tarefas) => (
                    <li>{tarefas}</li>
                ))}
            </ul>
        </div>
    )


   
}

export default ListTask