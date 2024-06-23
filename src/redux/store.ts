import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./Slices/moviesSlice";
import { searchSlice } from "./Slices/searchSlice";
import { paginationSlice } from "./Slices/paginationSlice";
import { themeSlice } from "./Slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    Movies: moviesSlice.reducer,
    Search: searchSlice.reducer,
    Pagination: paginationSlice.reducer,
    Theme: themeSlice.reducer,
  },
});

export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
