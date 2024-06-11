import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";

const rootReducer = combineReducers({
  darkMode: darkModeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
