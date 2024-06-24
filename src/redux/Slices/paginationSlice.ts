import IMoviesPaginated from "../../models/IMoviesPaginated";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPaginationSlice {
  page: number;
  total_pages: number;
  total_results: number;
}

const initialState: IPaginationSlice = {
  page: 1,
  total_pages: 1,
  total_results: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationInfo: (
      state,
      {
        payload: { page, total_pages, total_results },
      }: PayloadAction<IMoviesPaginated>,
    ) => {
      state.page = state.page > total_pages ? 1 : page;
      state.total_results = total_results;
      state.total_pages = total_pages;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage, setPaginationInfo } = paginationSlice.actions;
