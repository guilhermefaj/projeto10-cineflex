import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { moviesList } from "./services/UserService"
import axios from "axios"

export default function App() {

    const [movies, setMovies] = useState([])
    const [movieId, setMovieId] = useState(null)
    const [movieSession, setMovieSession] = useState([])

    console.log("movies: ", movies)
    console.log("movieId: ", movieId)
    console.log("movieSession: ", movieSession)


    useEffect(() => {
        moviesList.then(resposta => {
            setMovies(resposta.data);
        })

        moviesList.catch(erro => {
            console.log("erro lista:", erro.response.data)
        })
    }, []);

    useEffect(() => {
        if (movieId) {
            const moviesSessionsURL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`
            const moviesSessions = axios.get(moviesSessionsURL);

            moviesSessions.then(resposta => {
                setMovieSession(resposta.data);
                alert("entrou")
                console.log("resposta API: ", resposta.data)
            })

            moviesSessions.catch(erro => {
                alert("erro")
                console.log("erro seção:", erro.response.data)
            })
        }
    }, [movieId]);

    return (
        <>
            <NavContainer>CINEFLEX</NavContainer>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                movies={movies}
                                setMovieId={setMovieId}
                            />}
                    />
                    <Route
                        path="/sessoes/:movieId"
                        element={
                            <SessionsPage
                                movieSession={movieSession}
                            />}
                    />
                    <Route
                        path="/assentos/240"
                        element={<SeatsPage />}
                    />
                    <Route
                        path="sucesso"
                        element={<SuccessPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
