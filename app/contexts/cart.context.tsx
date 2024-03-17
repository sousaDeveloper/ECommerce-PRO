"use client";

import { createContext, useState } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";

interface ICardContext {
  products: CartProduct[];
  addProductToCart: (product: Product) => void;
}

export const CardContext = createContext<ICardContext>({
  products: [],
  addProductToCart: () => {},
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

  return <CardContext.Provider value={{ products, addProductToCart }}>{children}</CardContext.Provider>;
}
