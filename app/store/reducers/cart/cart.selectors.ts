import { RootState } from "store/store";

export const selectProductsTotalPrice = (state: RootState) => {
  const productsTotalPrice = state.cartReducer.products.reduce((accum, num) => accum + num.price * num.quantity, 0);
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(productsTotalPrice);
};

export const selectProductsTotalCart = (state: RootState) => {
  return state.cartReducer.products.reduce((accum, num) => accum + num.quantity, 0);
};
