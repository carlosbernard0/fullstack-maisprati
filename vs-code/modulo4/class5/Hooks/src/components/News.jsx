import { useState, useEffect } from "react";

function News(){
    const [ news, setNews] = useState(null)
     
    

    useEffect(() => {
        const fetchNews = async () =>{
            const response = await fetch(`https://jsonplaceholder.typecode.com/posts/${count}`)
            const dataNews = await response.json()
            setNews(dataNews)               
        }

        fetchNews() 
        const timeId = setInterval(()=>{
            setCount(prevCount=>prevCount+1)

        },10000)

        return () => clearInterval(timeId)
    },[timeId])

    return(
        <div>
            <h1>
                {news}
            </h1>
        </div>
    )
}

export default News