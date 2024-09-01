import { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
    const { cartItems} = useContext(CartContext)

    return(
        <div>
            <h2>
                Items adicionados no carrinho
            </h2>
            <ul style={{listStyleType: 'number'}}>
                {cartItems.map((item,index)=>(
                    <li key={index  }>{item}</li>    
                ))}
            </ul>

        </div>
    )
}

export default Cart