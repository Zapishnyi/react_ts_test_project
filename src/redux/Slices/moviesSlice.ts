import IMovie from "../../models/IMovie";
import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { tmbdDataService } from "../../services/tmdbData.api.service";
import { AxiosError } from "axios";
import { setPaginationInfo } from "./paginationSlice";
import { store } from "../store";
import IErrorResponse from "../../models/IErrorResponse";

interface IMoviesSlice {
  movies: IMovie[];
  chosenMovie: IMovie | null;
  loadingStateMovies: boolean;
}

const initialState: IMoviesSlice = {
  movies: [],
  chosenMovie: null,
  loadingStateMovies: false,
};

const searchMoviesByGenresOnly = createAsyncThunk(
  "movies/loadAllMovies",
  async (getQuery: string, thunkAPI) => {
    try {
      const movies = await tmbdDataService.getAllMovies(getQuery);
      thunkAPI.dispatch(setPaginationInfo(movies));
      return thunkAPI.fulfillWithValue(movies.results);
    } catch (e) {
      const error = e as AxiosError<IErrorResponse>;
      return thunkAPI.rejectWithValue(error.response?.data.status_message);
    } finally {
      thunkAPI.dispatch(MoviesActions.setLoadingState(false));
    }
  },
);

const searchMoviesByTitle = createAsyncThunk(
  "movies/searchMovies",
  async (searchQuery: string, thunkAPI) => {
    try {
      const movies = await tmbdDataService.searchMovies(searchQuery);
      const {
        Search: { chosenGenresId },
      } = store.getState();
      Object.assign(movies, {
        results: movies.results?.filter((e: IMovie) =>
          chosenGenresId.reduce(
            (acc, curr) => (!acc ? acc : e.genre_ids.includes(curr)),
            true,
          ),
        ),
      });
      thunkAPI.dispatch(setPaginationInfo(movies));
      return thunkAPI.fulfillWithValue(movies.results);
    } catch (e) {
      const error = e as AxiosError<IErrorResponse>;
      console.log(e);
      return thunkAPI.rejectWithValue(error.response?.data.status_message);
    } finally {
      thunkAPI.dispatch(MoviesActions.setLoadingState(false));
    }
  },
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setChosenMovie: (state, action: { payload: IMovie }) => {
      state.chosenMovie = action.payload;
    },
    setLoadingState: (state, action) => {
      state.loadingStateMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMoviesByGenresOnly.fulfilled, (state, action) => {
        state.movies = action.payload || [];
      })
      .addCase(searchMoviesByTitle.fulfilled, (state, action) => {
        state.movies = action.payload || [];
      })
      .addMatcher(
        isRejected(searchMoviesByGenresOnly, searchMoviesByTitle),
        (state, action) => {
          console.log(
            "Movies receive sequence failed with error:",
            action.payload,
          );
        },
      )
      .addMatcher(
        isPending(searchMoviesByGenresOnly, searchMoviesByTitle),
        (state) => {
          state.loadingStateMovies = true;
        },
      );
  },
});

export const MoviesActions = {
  ...moviesSlice.actions,
  searchMoviesByTitle,
  searchMoviesByGenresOnly,
};
