import { useContext, useState } from "react";
import CartContex from "../context/CartContext";

const AddProductList = () => {
    const {productList,setProductList,setGoCart} =  useContext(CartContex)
    const [item, setItem] = useState()

    const addItem = () =>{ 
        setProductList([...productList, item])
    }

    const changeItem = (event) => {
        setItem(event.target.value)
        
    }

    const goCart = () => {
        setGoCart(true)
    }
    return(
        <div>
            <label>
                Add Item <input type="text" value={item} onChange={changeItem} />
            </label>
            <button onClick={addItem}>ADD</button>
            <br />
            Your items: 
            <ul>
                {productList.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <br />
            <button onClick={goCart}>Ir para o carrinho</button>

        </div>
    )
}

export default AddProductList