const addDecimels = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const updateCart = (state) => {
  //item price
  state.itemsPrice = addDecimels(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //shpping price
  state.shippingPrice = addDecimels(state.itemsPrice > 500 ? 0 : 50);
  //tax price
  state.taxPrice = addDecimels(Number((0.15 * state.itemsPrice).toFixed(2)));

  //total price

  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};

export { updateCart };
