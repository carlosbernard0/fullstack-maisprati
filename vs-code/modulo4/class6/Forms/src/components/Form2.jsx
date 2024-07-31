import { useState } from "react";

function Form2(){
    const [ adress, setAdress ] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event)=>{
        const { name, value} = event.target

        setAdress(prevState =>({
            ...prevState, [name]:value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(!adress.street || !adress.city || !adress.postalCode){
            alert('Preencha todos os campos')
        }else{
            alert(`Endereco: ${adress.street}, ${adress.city}, ${adress.postalCode}`)
        }               
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Street:
                <input type="text" name="street" value={adress.street} onChange={handleChange} />
            </label>
            <label>
                City:
                <input type="text" name="city" value={adress.city} onChange={handleChange} />
            </label>
            <label>
                Postal Code:
                <input type="text" name="postalCode" value={adress.postalCode} onChange={handleChange} />
            </label>
            <button>Enviar</button>
        </form>
    )
}

export default Form2