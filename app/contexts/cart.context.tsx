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
    return setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  return <CardContext.Provider value={{ products, addProductToCart }}>{children}</CardContext.Provider>;
}
