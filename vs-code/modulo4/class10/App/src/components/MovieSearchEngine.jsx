import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightcyan;

`

const Title = styled.h2`
    font-weight: bolder;
    color: #555;
    background-color: lightblue;
    border-radius: 5px;
`

const Input = styled.input`
   color: blue;
   padding: 5px;

`

const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 5px;
    margin: 20px 0;
`

const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    max-height: 500px; /* Ajuste a altura máxima conforme necessário */
    overflow-y: auto; /* Adiciona rolagem vertical se necessário */
    width: 100%;
    color:white;
    margin-top: 20px;
`   

const TitleMovies = styled.h3`
    color: black;
    font-family: 'Helvetica' sans-serif;
    font-weight: bolder;
    border-radius: 3px;
    text-align: center;
`

const PMovies = styled.p`
    color: white;
    font-weight: 600;
    text-align: center;
`

const ImgMovies = styled.img`
    border-radius: 3px;
    padding: 5px;
`

const MoviesSearchEngine = () => {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const searchMovies = async() => {
        try{
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=ca17433a`)
            setMovies(response.data.Search)
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Container>
            <Title>Movie Search Engine</Title>
            <Input type='text' value={query} onChange={(event) => setQuery(event.target.value)}></Input>
            <Button onClick={searchMovies}>Search</Button>
            <ContainerMovies>{movies.map((movie,index) => (
                <div>
                    <ImgMovies src={movie.Poster} key={index}/>
                    <TitleMovies key={index}>{movie.Title}</TitleMovies>
                    <PMovies key={index}>{movie.Year}</PMovies>
                </div>

            ))}</ContainerMovies>
        </Container>
    )
}

export default MoviesSearchEngine