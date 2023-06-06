import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
