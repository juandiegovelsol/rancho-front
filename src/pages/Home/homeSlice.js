import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  menuHandler: false,
  homeButtonHandler: false,
  menuButtonHandler: false,
  reserveButtonHandler: false,
  eventButtonHandler: false,
  contactButtonHanlder: false,
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
    setHomeButton: (state) => {
      state.homeButtonHandler = true;
      state.menuButtonHandler = false;
      state.reserveButtonHandler = false;
      state.eventButtonHandler = false;
      state.contactButtonHanlder = false;
    },
    setMenuButton: (state) => {
      state.homeButtonHandler = false;
      state.menuButtonHandler = true;
      state.reserveButtonHandler = false;
      state.eventButtonHandler = false;
      state.contactButtonHanlder = false;
    },
    setReserveButton: (state) => {
      state.homeButtonHandler = false;
      state.menuButtonHandler = false;
      state.reserveButtonHandler = true;
      state.eventButtonHandler = false;
      state.contactButtonHanlder = false;
    },
    setEventButton: (state) => {
      state.homeButtonHandler = false;
      state.menuButtonHandler = false;
      state.reserveButtonHandler = false;
      state.eventButtonHandler = true;
      state.contactButtonHanlder = false;
    },
    setContactButton: (state) => {
      state.homeButtonHandler = false;
      state.menuButtonHandler = false;
      state.reserveButtonHandler = false;
      state.eventButtonHandler = false;
      state.contactButtonHanlder = true;
    },
  },
});

export const {
  openMenu,
  closeMenu,
  setHomeButton,
  setMenuButton,
  setReserveButton,
  setEventButton,
  setContactButton,
} = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;
