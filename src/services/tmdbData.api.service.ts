import axios from "axios";
import { tmdbDataURLS } from "../constants/tmdbURLS";
import IMoviesPaginated from "../models/IMoviesPaginated";
import IGenres from "../models/IGenres";

const axiosInstance = axios.create({
  baseURL: tmdbDataURLS.base,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjdiODE5MGYyY2E1ODE0M2JlMThjZTY1Y2UyNGNlNSIsInN1YiI6IjY0NDdhNzU2MDI1NzY0MDRkMDI3NjE0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JuF-6Mp8a7Tcu2fWrq3pL1R7NnwUdzpHQ1uuynCgLpw",
  },
});

interface ITmdbDataApiService {
  getAllGenres: Promise<IGenres>;
  getAllMovies: (getQuery: string) => Promise<IMoviesPaginated>;
  searchMovies: (searchQuery: string) => Promise<IMoviesPaginated>;
}

export const tmbdDataService: ITmdbDataApiService = {
  getAllGenres: axiosInstance
    .get(tmdbDataURLS.allGenres)
    .then((response) => response.data),
  getAllMovies: (getQuery) =>
    axiosInstance
      .get(tmdbDataURLS.allMovies(getQuery))
      .then((value) => value.data),
  searchMovies: (searchQuery) =>
    axiosInstance
      .get(tmdbDataURLS.searchMovies(searchQuery))
      .then((value) => value.data),
};
