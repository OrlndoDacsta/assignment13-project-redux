import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    dark: (state) => {
      state.darkMode = true;
    },

    light: (state) => {
      state.darkMode = false;
    },
  },
});

export default darkModeSlice.reducer;
export const { dark, light } = darkModeSlice.actions;
