import { useState, useEffect } from "react";

function News(){
    const [ news, setNews] = useState(null)
    const [ count, setCount] = useState(1)
     
    

    useEffect(() => {
        const fetchNews = async () =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
            const dataNews = await response.json()
            setNews(dataNews) 
        }

        const interval = setInterval(()=>{
            setCount((prevCount)=>prevCount+1)            
        },10000)
        
        fetchNews() 
        return () => {
            clearInterval(interval)
        }
    },[count])

    return(
        <div>
            <h1>
                {news ? news.title : 'carregando noticia'}
            </h1>
            <p>
            {news ? news.body: ' '}
            </p>
        </div>
    )
}

export default News