import { useContext } from "react";
import DynamicThemeContext from "../context/DynamicThemeContext";
import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";

const Div = styled.div`
    background-color: lightyellow;
    display: flex;
    flex-direction: column;
`

const ThemedComponent = () => {
    const {theme} = useContext(DynamicThemeContext)

    return(
        <div>
            {theme=='light' ? <Div><ThemeSelector/></Div> : <Div style={{background: 'grey'}}><ThemeSelector/></Div>}
        </div>
    )
}

export default ThemedComponent