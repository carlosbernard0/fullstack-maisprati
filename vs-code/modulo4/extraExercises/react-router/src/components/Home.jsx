import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

    const [id, setId] = useState();

    return(
        <div>
            <h1>Hello Guys!</h1>
            <button><Link to='/user/1'>Go to details 1</Link></button>
            <button><Link to='/user/2'>Go to details 2</Link></button>
        </div>
    )

}

export default Home