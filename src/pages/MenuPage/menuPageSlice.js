import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getDishes } from "./menuPageAPI";

const initialState = {
  cart: [],
  quantities: [],
  categories: [],
  dishes: [],
};

export const getCategoriesAsync = createAsyncThunk(
  "menuPage/getCategories",
  async () => {
    const data = await getCategories();
    return data;
  }
);
export const getDishesAsync = createAsyncThunk(
  "menuPage/getDishes",
  async () => {
    const data = await getDishes();
    return data;
  }
);

const menuPageSlice = createSlice({
  name: "menuPage",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    clearQuantities: (state) => {
      state.quantities = [];
    },
    clearCategories: (state) => {
      state.categories = [];
    },
    clearDishes: (state) => {
      state.dishes = [];
    },
    /* addQuantity:(state,action) => {
        state.
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getDishesAsync.fulfilled, (state, action) => {
        state.dishes = action.payload;
        const dishes = action.payload;
        dishes.map((item) => state.cart.push({ ...item, quantity: 0 }));
        /* state.quantities = new Array(action.payload.length).fill(0); */
      });
  },
});

export const { clearCart, clearQuantities, clearCategories, clearDishes } =
  menuPageSlice.actions;

export const selectMenuPage = (state) => state.menuPage;

export default menuPageSlice.reducer;
