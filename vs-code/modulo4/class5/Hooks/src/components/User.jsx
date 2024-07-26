import { useState, useEffect } from "react";

function UserProfile(){
    const [ user, setUser] = useState(null)

    useEffect(()=>{
        const fetchUserData = async() => {
            const response = await fetch('https://viacep.com.br/ws/01001000/json/')
            const userData = await response.json();
            console.log(userData)
            setUser(userData)
        }

        fetchUserData()

        return () => setUser(null)
    },[])

    return(
        <div>
            {user ? (
               <div>
                    <h1>{user.cep}</h1>
                    <h1>{user.bairro}</h1>
               </div> 
            ) : (
                <p>aguarde o carregamento do perfil</p>
            )}
        </div>
    )
}

export default UserProfile