import Product from "@typesproduct.types";
import CartActionTypes from "./cart.actions-types";

interface AddProductAction {
  type: typeof CartActionTypes.addProductToCart;
  payload: Product;
}

export const addProductToCart = (payload: Product): AddProductAction => ({
  type: CartActionTypes.addProductToCart,
  payload,
});

interface ClearCartAction {
  type: typeof CartActionTypes.clearCart;
}

export const clearCart = (): ClearCartAction => ({
  type: CartActionTypes.clearCart,
});

export type CartActions = ClearCartAction | AddProductAction;
