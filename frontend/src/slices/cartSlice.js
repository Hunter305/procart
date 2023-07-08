import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimels = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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

      //item price
      state.itemsPrice = addDecimels(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      //shpping price
      state.shippingPrice = addDecimels(state.itemsPrice > 500 ? 0 : 50);
      //tax price
      state.taxPrice = addDecimels(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      //total price

      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
