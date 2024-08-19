import { useState } from "react";
import axios from "axios";

const IPAdressFinder = () => {
    const [ ipinfo, setIpinfo] = useState(
        {ip: '', hostname: '', city: '', region: '', country: ''}
    );
    const [ ip, setIp] = useState('')
    
    const searchIP = async () => {
        try{
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
    
            setIpinfo({
                ...ipinfo, 
                ip: response.data.ip, 
                hostname: response.data.hostname,
                city: response.data.city,
                region: response.data.region,
                country: response.data.country
            })
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    
    return(
        <div>
            <h1>Where are you from?</h1>
            <label>Digit your IP...</label>
            <input type="text" value={ip} onChange={(event)=> setIp(event.target.value)} />
            <button onClick={searchIP}>Pesquisar</button>
            <div>
                {ipinfo.ip && (
                    <div>
                        <p>IP: {ipinfo.ip}</p>
                        <p>Hostname: {ipinfo.hostname}</p>
                        <p>City: {ipinfo.city}</p>
                        <p>Region: {ipinfo.region}</p>
                        <p>Country: {ipinfo.country}</p>
                    </div>
                )}
            </div>            
        </div>
    )

}

export default IPAdressFinder