import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  changeUserRole,
  getAllOrders,
  getAllUsers,
  updateOrder,
} from "./adminAPI";

const initialState = {
  loading: false,
  allUsers: [],
  updatedUser: {},
  allOrders: [],
  updatedOrder: {},
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

export const updateOrderAsync = createAsyncThunk(
  "admin/updateOrder",
  async ({ key, value, status }) => {
    const data = await updateOrder({ key, value, status });
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
    clearUpdatedOrder: (state) => {
      state.updatedOrder = {};
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
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.updatedOrder = action.payload;
      });
  },
});

export const { clearAllUsers, clearUpdatedUser, clearUpdatedOrder } =
  adminSlice.actions;

export const selectAdmin = (state) => state.admin;

export default adminSlice.reducer;
