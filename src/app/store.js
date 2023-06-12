import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeSlice";
import menuPageReducer from "../pages/MenuPage/menuPageSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    menuPage: menuPageReducer,
  },
});
