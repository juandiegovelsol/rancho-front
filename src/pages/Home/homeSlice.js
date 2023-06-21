import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "./homeAPI";

const initialState = {
  loading: false,
  menuHandler: false,
  cartHandler: false,
  accountHandler: false,
  homeButtonHandler: false,
  menuButtonHandler: false,
  reserveButtonHandler: false,
  eventButtonHandler: false,
  contactButtonHanlder: false,
  user: {},
};

export const getUserAsync = createAsyncThunk(
  "home/getUser",
  async ({ key, value }) => {
    const data = await getUser({ key, value });
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    openMenu: (state) => {
      if (!state.menuHandler) {
        state.menuHandler = true;
        state.accountHandler = false;
        state.cartHandler = false;
      }
    },
    closeMenu: (state) => {
      if (state.menuHandler) {
        state.menuHandler = false;
      }
    },
    openAccount: (state) => {
      if (!state.accountHandler) {
        state.menuHandler = false;
        state.accountHandler = true;
        state.cartHandler = false;
      }
    },
    closeAccount: (state) => {
      if (state.accountHandler) {
        state.accountHandler = false;
      }
    },
    openCart: (state) => {
      if (!state.cartHandler) {
        state.menuHandler = false;
        state.accountHandler = false;
        state.cartHandler = true;
      }
    },
    closeCart: (state) => {
      if (state.cartHandler) {
        state.cartHandler = false;
      }
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
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const {
  openMenu,
  closeMenu,
  openAccount,
  closeAccount,
  openCart,
  closeCart,
  setHomeButton,
  setMenuButton,
  setReserveButton,
  setEventButton,
  setContactButton,
} = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;
