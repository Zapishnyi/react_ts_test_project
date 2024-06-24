import { createSlice } from "@reduxjs/toolkit";

interface IChosenPage {
  chosenPage: number;
}

const initialState: IChosenPage = {
  chosenPage: 1,
};

export const chosenPageSlice = createSlice({
  name: "chosenPage",
  initialState,
  reducers: {
    setChosenPage: (state, action) => {
      state.chosenPage = action.payload;
    },
  },
});

export const { setChosenPage } = chosenPageSlice.actions;
