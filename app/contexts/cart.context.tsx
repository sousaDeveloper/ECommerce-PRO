"use client";

import { createContext, useState } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";

interface ICardContext {
  products: CartProduct[];
  addProductToCart: (product: Product) => void;
  removeProductInCart: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export const CardContext = createContext<ICardContext>({
  products: [],
  addProductToCart: () => {},
  removeProductInCart: () => {},
  decreaseProductQuantity: () => {},
});

export default function CardContextProvider({ children }: any) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some((item) => item.id === product.id);

    if (productIsAlreadyInCart) {
      return setProducts((prevState) =>
        prevState.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    }

    return setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeProductInCart = (productId: string) => {
    return setProducts(products.filter((item) => item.id !== productId));
  };

  const decreaseProductQuantity = (productId: string) => {
    return setProducts((product) =>
      product
        .map((product) => (product.id === productId ? { ...product, quantity: product.quantity - 1 } : product))
        .filter((product) => product.quantity > 0)
    );
  };

  return (
    <CardContext.Provider value={{ products, addProductToCart, removeProductInCart, decreaseProductQuantity }}>
      {children}
    </CardContext.Provider>
  );
}
