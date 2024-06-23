import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITheme from "../../models/ITheme";

const initialState: ITheme = {
  lightThemeOn: JSON.parse(localStorage.getItem("lightThemeOn") || "true"),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.lightThemeOn = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
