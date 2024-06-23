export const tmdbDataURLS = {
  base: "https://api.themoviedb.org/3",
  allMovies: (query: string): string => `/discover/movie${query}`,
  allGenres: "/genre/movie/list",
  searchMovies: (query: string): string => `/search/movie${query}`,
};

export const tmdbImageURL = (image_path: string): string =>
  `https://image.tmdb.org/t/p/w500${image_path}`;
