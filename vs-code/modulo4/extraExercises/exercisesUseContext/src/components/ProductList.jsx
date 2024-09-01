import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductList = () => {
    const {productList,cartItems,setCartItems} = useContext(CartContext)

    const addCart = (item) => {
        setCartItems([...cartItems,item])
    }

    return(
        <div>
            <h1>Your cart!!</h1>
            <ul>
                {productList.map((item,index)=>(
                    <div>
                        <li key={index}>{item}</li>
                        <button onClick={() =>{addCart(item)}}>Adicionar ao carrinho</button>
                    </div> 
                    
                ))}

            </ul>
        </div>
    )
}

export default ProductList