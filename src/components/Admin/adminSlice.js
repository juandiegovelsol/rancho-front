import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeUserRole, getAllOrders, getAllUsers } from "./adminAPI";

const initialState = {
  loading: false,
  allUsers: [],
  updatedUser: {},
  allOrders: [],
};

export const getAllUsersAsync = createAsyncThunk(
  "admin/getAllUsers",
  async ({ key, value }) => {
    const data = await getAllUsers({ key, value });
    return data;
  }
);

export const changeUserRoleAsync = createAsyncThunk(
  "admin/updateRole",
  async ({ key1, value1, key2, value2 }) => {
    const data = await changeUserRole({ key1, value1, key2, value2 });
    return data;
  }
);

export const getAllOrdersAsync = createAsyncThunk(
  "admin/getAllOrders",
  async ({ key, value }) => {
    const data = await getAllOrders({ key, value });
    return data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAllUsers: (state) => {
      state.allUsers = [];
    },
    clearUpdatedUser: (state) => {
      state.updatedUser = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(changeUserRoleAsync.fulfilled, (state, action) => {
        state.updatedUser = action.payload;
      })
      .addCase(getAllOrdersAsync.fulfilled, (state, action) => {
        state.allOrders = action.payload;
      });
  },
});

export const { clearAllUsers, clearUpdatedUser } = adminSlice.actions;

export const selectAdmin = (state) => state.admin;

export default adminSlice.reducer;
