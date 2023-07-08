import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existsItem = state.cartItems.find((x) => x.Id === item._id);
      if (existsItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existsItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
