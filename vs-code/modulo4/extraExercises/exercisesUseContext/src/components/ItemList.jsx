import { useContext } from "react";
import UserPreferencesContext from "../context/UserPreferencesContext";
import styled from 'styled-components'
 
const ItemList = () => {

    const { viewMode} = useContext(UserPreferencesContext)

    const Ul = styled.ul`
        display: block;
    `
    

    return(
        <div>
            {viewMode== 'list' ? <Ul>
                <li>Banana</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>Melon</li>
                <li>Grape</li>

                </Ul> : <Ul style={{display:'flex', gap: '10px', listStyleType: 'none'}}>
                <li >Banana</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>Melon</li>
                <li>Grape</li>

                </Ul>
            }

        </div>
    )
}

export default ItemList