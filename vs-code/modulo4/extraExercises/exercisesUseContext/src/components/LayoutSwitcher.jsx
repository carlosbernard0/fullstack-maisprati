import { useContext, useState } from "react";
import LayoutPreferencesContext from "../context/LayoutPreferencesContext";

const LayoutSwitcher = () => {
    const {layout,setLayout} = useContext(LayoutPreferencesContext)
    const [ font, setFont] = useState(layout.font)


    return(
        <div style={{display: 'flex',flexDirection: 'column', backgroundColor: 'lightgray', padding: '10px'}}>
            <label> Change padding of your page:
                <input type="text" onChange={(event)=>setLayout({...layout, padding: event.target.value})}/>    
            </label>        
            <label> Change Margin of your page:
                <input type="text" onChange={(event)=>setLayout({...layout, margin: event.target.value})}/>    
            </label>        
            <label> Select a font of your page:
                <select onChange={(event) => setLayout({...layout, font: event.target.value })}>
                    <option value="Serif">Serif</option>
                    <option value="Sans-serif">Sans-serif</option>
                </select>
            </label>
            <label style={{display: 'flex'}}>
                Change your theme:
                <button onClick={()=>setLayout({...layout, theme: 'lightyellow'})}>Light</button>
                <button onClick={()=>setLayout({...layout, theme: 'grey'})}>Dark</button>
            </label>        
        </div>
    )
}

export default LayoutSwitcher;