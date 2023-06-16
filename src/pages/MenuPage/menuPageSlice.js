import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getDishes } from "./menuPageAPI";

const initialState = {
  cart: [],
  categories: [],
  dishes: [],
  quantity: 0,
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
    clearCategories: (state) => {
      state.categories = [];
    },
    clearDishes: (state) => {
      state.dishes = [];
    },
    addQuantity: (state, action) => {
      state.cart[action.payload].quantity =
        state.cart[action.payload].quantity + 1;
      state.quantity = state.quantity + 1;
    },
    subsQuantity: (state, action) => {
      if (state.cart[action.payload].quantity > 0) {
        state.cart[action.payload].quantity =
          state.cart[action.payload].quantity - 1;
        if (state.quantity > 0) {
          state.quantity = state.quantity - 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getDishesAsync.fulfilled, (state, action) => {
        state.dishes = action.payload;
        const dishes = action.payload;
        console.log(state.cart);
        if (state.cart.length === 0) {
          dishes.map((item) => state.cart.push({ ...item, quantity: 0 }));
        }
      });
  },
});

export const {
  clearCart,
  clearCategories,
  clearDishes,
  addQuantity,
  subsQuantity,
} = menuPageSlice.actions;

export const selectMenuPage = (state) => state.menuPage;

export default menuPageSlice.reducer;
