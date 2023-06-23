import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeUserRole, getAllUsers } from "./adminAPI";

const initialState = {
  loading: false,
  allUsers: [],
  updatedUser: {},
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
      });
  },
});

export const { clearAllUsers, clearUpdatedUser } = adminSlice.actions;

export const selectAdmin = (state) => state.admin;

export default adminSlice.reducer;
