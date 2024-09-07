import { useContext } from "react";
import LayoutPreferencesContext from "../context/LayoutPreferencesContext";
import styled from "styled-components";

const StyledComponent = () => {
    const {layout} = useContext(LayoutPreferencesContext)

    const Home = styled.div`
    `

    return(
       <Home style={{
        padding: layout.padding+'px',
        margin: layout.margin+'px',
        fontFamily: layout.font,
        backgroundColor: layout.theme,
    }}>
        <h1>Hello Guys!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus doloremque doloribus assumenda veritatis animi! Tempore ullam quam nostrum, ducimus error, laboriosam enim molestias nam sapiente ut pariatur, animi inventore.</p>
    </Home>
    )
}

export default StyledComponent