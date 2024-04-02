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

interface RemoveProductAction {
  type: typeof CartActionTypes.removeProductInCart;
  payload: string;
}

export const removeProductInCart = (payload: string): RemoveProductAction => ({
  type: CartActionTypes.removeProductInCart,
  payload,
});

interface DecreaseProductQuantityAction {
  type: typeof CartActionTypes.decreaseProductQuantity;
  payload: string;
}

export const decreaseProductQuantity = (payload: string): DecreaseProductQuantityAction => ({
  type: CartActionTypes.decreaseProductQuantity,
  payload,
});

export type CartActions = ClearCartAction | AddProductAction | RemoveProductAction | DecreaseProductQuantityAction;
