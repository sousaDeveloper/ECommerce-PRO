import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartProduct from "@typescart.types";
import Product from "@typesproduct.types";
import { RootState } from "store/store";

interface InitialState {
  products: CartProduct[];
}

const initialState: InitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const productIsAlreadyInCart = state.products.some((item) => item.id === product.id);

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
        };
      }

      return { ...state, products: [...state.products, { ...product, quantity: 1 }] };
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products.filter((item) => item.id !== action.payload);
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      state.products
        .map((product) => (product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product))
        .filter((product) => product.quantity > 0);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, decreaseProductQuantity, clearCart } = cartSlice.actions;

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

export default cartSlice.reducer;
