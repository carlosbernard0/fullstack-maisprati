import { useContext, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";

const AddToFavorites = () => {
    const {listFavorites, setListFavorites} = useContext(FavoritesContext)
    const [item, setItem] = useState('')
    
    return(
        <div>
            <label>
                Adicionar item a lista:
                <input type="text"  onChange={(event)=> setItem(event.target.value)}/>
                <button onClick={()=> setListFavorites([...listFavorites,item])}>Add</button>
            </label>
        </div>
    )
}

export default AddToFavorites