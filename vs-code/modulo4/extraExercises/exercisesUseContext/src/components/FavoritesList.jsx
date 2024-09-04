import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

const FavoritesList = () => {
    const { listFavorites} = useContext(FavoritesContext)

    return(
        <div>
            <ul>{listFavorites.map((item,index)=> (
                <li key={index}>{item}</li>
            ))}</ul>
        </div>
    )
}

export default FavoritesList