import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviesList from "../pages/MoviesList/MoviesList";
import MovieInfo from "../pages/MovieInfo/MovieInfo";
import SearchPageMobile from "../pages/SearchPageMobile/SearchPageMobile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const routerConfig = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/movies"} />,
      },
      {
        path: "/movies",
        element: <MoviesList />,
      },
      {
        path: "/movieInfo",
        element: <MovieInfo />,
      },
      {
        path: "/search",
        element: <SearchPageMobile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
