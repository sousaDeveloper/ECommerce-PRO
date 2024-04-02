import Product from "@typesproduct.types";
import CartActionTypes from "./cart.actions-types";

export const addProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload,
});
