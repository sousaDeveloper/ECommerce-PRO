import CartProduct from "@typescart.types";
import CartActionTypes from "./cart.actions-types";

interface InitialState {
  products: CartProduct[];
  formattedPrice: string;
}

const initialState: InitialState = {
  products: [],
  formattedPrice: "",
};

export default function cartReducer(state = initialState, action: any) {
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
    default:
      return { ...state };
  }
}
