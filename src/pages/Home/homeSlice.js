import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  menuHandler: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menuHandler = true;
    },
    closeMenu: (state) => {
      state.menuHandler = false;
    },
  },
});

export const { openMenu, closeMenu } = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;
