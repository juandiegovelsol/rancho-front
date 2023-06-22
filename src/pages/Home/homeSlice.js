import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, getUser, updateUser } from "./homeAPI";

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
  userLoading: false,
  logoutHandler: false,
};

export const getUserAsync = createAsyncThunk(
  "home/getUser",
  async ({ key, value }) => {
    const data = await getUser({ key, value });
    return data;
  }
);

export const createUserAsync = createAsyncThunk(
  "home/createUser",
  async ({ name, lastname, email, status, admin }) => {
    const data = await createUser({ name, lastname, email, status, admin });
    return data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "home/updateUser",
  async ({ key, value, ...rest }) => {
    const data = await updateUser({ key, value, ...rest });
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
    clearUser: (state) => {
      state.user = {};
    },
    setLogoutHandler: (state) => {
      state.logoutHandler = true;
    },
    clearLogoutHandler: (state) => {
      state.logoutHandler = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.loading = true;
        state.userLoading = true;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userLoading = false;
        state.user = action.payload;
      })
      /* .addCase(createUserAsync.pending, (state) => {
        state.userLoading = true;
      }) */
      .addCase(createUserAsync.fulfilled, (state, action) => {
        /* state.userLoading = false; */
        state.user = action.payload;
      })
      /* .addCase(updateUserAsync.pending, (state) => {
        state.userLoading = true;
      }) */
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        /* state.userLoading = false; */
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
  clearUser,
  setLogoutHandler,
  clearLogoutHandler,
} = homeSlice.actions;

export const selectHome = (state) => state.home;

export default homeSlice.reducer;
