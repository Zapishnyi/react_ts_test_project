import IGenres from "../../models/IGenres";
import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import { tmbdDataService } from "../../services/tmdbData.api.service";
import { AxiosError } from "axios";
import IGenre from "../../models/IGenre";

interface IGenresSlice {
  movieSearchName: string;
  genres: IGenre[];
  chosenGenresId: number[];
  loadingStateGenres: boolean;
}

const initialState: IGenresSlice = {
  movieSearchName: "",
  genres: [],
  chosenGenresId: [],
  loadingStateGenres: false,
};

const loadGenres = createAsyncThunk(
  "genres/loadGenres",
  async (_, thunkAPI) => {
    try {
      const genres = await tmbdDataService.getAllGenres.then(
        ({ genres }) => genres,
      );
      return thunkAPI.fulfillWithValue(genres);
    } catch (e) {
      const error = e as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.response?.data);
    } finally {
      thunkAPI.dispatch(SearchActions.setLoadingState(false));
    }
  },
);

export const searchSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setChosenGenresId: (state, action) => {
      state.chosenGenresId = action.payload;
    },
    setMovieSearchName: (state, action) => {
      state.movieSearchName = action.payload;
    },
    setLoadingState: (state, action) => {
      state.loadingStateGenres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addMatcher(isRejected(loadGenres), (state, action) => {
        console.log(
          "Genres receive sequence failed with error:",
          action.payload,
        );
      })
      .addMatcher(isPending(loadGenres), (state) => {
        state.loadingStateGenres = true;
      });
  },
});

export const SearchActions = { ...searchSlice.actions, loadGenres };
