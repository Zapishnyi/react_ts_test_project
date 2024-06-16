export const tmdbURLS ={
    base: "https://api.themoviedb.org/3",
    allMovies:(page:string,genres?:number[]):string=> `/discover/movie?page=${page}&with_genres=${genres?.join()}`,
    allGenres: "/genre/movie/list",
    searchMovies:(query:string):string => `/search/movie?query=${query}`
}