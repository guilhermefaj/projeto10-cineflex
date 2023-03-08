import axios from "axios";
import { useEffect } from "react";

const moviesListURL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
export const moviesList = axios.get(moviesListURL);

