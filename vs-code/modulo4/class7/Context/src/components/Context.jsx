import { createContext } from "react";

export const MyContext = createContext()

export const MyProvider = (props) => {
    return(
        <MyContext.Provider value={{name:'Teto'}}>
            {props.children}
        </MyContext.Provider>
    )
}   
