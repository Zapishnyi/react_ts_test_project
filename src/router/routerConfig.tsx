import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviesList from "../pages/MoviesList/MoviesList";
import MovieInfo from "../pages/MovieInfo/MovieInfo";

export const routerConfig = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"movies",
                element:<MoviesList/>
            },
            {
                path:"movieInfo",
                element:<MovieInfo/>
            }
        ]
    }
])