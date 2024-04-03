import CartProduct from "@typescart.types";
import CartActionTypes from "./cart.actions-types";
import { CartActions } from "./cart.actions";

interface InitialState {
  products: CartProduct[];
}

const initialState: InitialState = {
  products: [],
};

export default function cartReducer(state = initialState, action: CartActions): InitialState {
  switch (action.type) {
    case CartActionTypes.addProductToCart: {
      const product = action.payload;
      const productIsAlreadyInCart = state.products.some((item) => item.id === product.id);

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }

      return { ...state, products: [...state.products, { ...product, quantity: 1 }] };
    }

    case CartActionTypes.removeProductInCart:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };

    case CartActionTypes.decreaseProductQuantity:
      return {
        ...state,
        products: state.products
          .map((product) => (product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product))
          .filter((product) => product.quantity > 0),
      };

    case CartActionTypes.clearCart:
      return { ...state, products: [] };

    default:
      return state;
  }
}
