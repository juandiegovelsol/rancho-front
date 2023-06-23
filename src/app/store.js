import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/homeSlice";
import menuPageReducer from "../pages/MenuPage/menuPageSlice";
import adminReducer from "../components/Admin/adminSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    menuPage: menuPageReducer,
    admin: adminReducer,
  },
});
