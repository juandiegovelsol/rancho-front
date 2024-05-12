import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createDish,
  deleteDish,
  getCategories,
  getDishes,
  updateDish,
  uploadImage,
} from "./menuPageAPI";

const initialState = {
  cart: [],
  categories: [],
  dishes: [],
  quantity: 0,
  updatedDish: {},
  imageURL: "",
  createdDish: {},
  deletedDish: {},
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

export const updateDishAsync = createAsyncThunk(
  "menuPage/updateDish",
  async ({ key, value, ...rest }) => {
    const data = await updateDish({ key, value, ...rest });
    return data;
  }
);

export const uploadImageAsync = createAsyncThunk(
  "menuPage/uploadImage",
  async ({ formData }) => {
    const data = await uploadImage({ formData });
    return data;
  }
);

export const createDishAsync = createAsyncThunk(
  "menuPage/createDish",
  async ({ key, value, ...rest }) => {
    const data = await createDish({ key, value, ...rest });
    return data;
  }
);

export const deleteDishAsync = createAsyncThunk(
  "menuPage/deleteDish",
  async ({ key, value, id }) => {
    const data = await deleteDish({ key, value, id });
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
    clearUpdatedDish: (state) => {
      state.updatedDish = {};
    },
    clearImageURL: (state) => {
      state.imageURL = "";
    },
    clearCreatedDish: (state) => {
      state.createdDish = {};
    },
    clearDeletedDish: (state) => {
      state.deletedDish = {};
    },
    clearCartQuant: (state) => {
      const updatedCart = state.cart.map((item) => {
        return { ...item, quantity: 0 };
      });
      state.cart = updatedCart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getDishesAsync.fulfilled, (state, action) => {
        state.dishes = action.payload;
        const dishes = action.payload; //eliminar el condicional
        if (state.cart.length === 0) {
          dishes.map((item) => state.cart.push({ ...item, quantity: 0 }));
        }
      })
      .addCase(updateDishAsync.fulfilled, (state, action) => {
        state.updatedDish = action.payload;
      })
      .addCase(uploadImageAsync.fulfilled, (state, action) => {
        state.imageURL = action.payload;
      })
      .addCase(createDishAsync.fulfilled, (state, action) => {
        state.createdDish = action.payload;
      })
      .addCase(deleteDishAsync.fulfilled, (state, action) => {
        state.deletedDish = action.payload;
      });
  },
});

export const {
  clearCart,
  clearCategories,
  clearDishes,
  addQuantity,
  subsQuantity,
  clearUpdatedDish,
  clearImageURL,
  clearCreatedDish,
  clearDeletedDish,
  clearCartQuant,
} = menuPageSlice.actions;

export const selectMenuPage = (state) => state.menuPage;

export default menuPageSlice.reducer;
