import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCostumerOrders } from "./costumerAPI";

const initialState = {
  loading: false,
  costumerOrders: [],
};

export const getCostumerOrdersAsync = createAsyncThunk(
  "costumer/getCostumerOrders",
  async ({ key, value }) => {
    const data = await getCostumerOrders({ key, value });
    return data;
  }
);

const costumerSlice = createSlice({
  name: "costumer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCostumerOrdersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCostumerOrdersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.costumerOrders = action.payload;
      });
  },
});

export const selectCostumer = (state) => state.costumer;

export default costumerSlice.reducer;
