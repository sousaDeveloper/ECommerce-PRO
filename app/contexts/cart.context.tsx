"use client";

import { createContext, useState } from "react";
import CartProduct from "../types/cart.types";

interface ICardContext {
  products: CartProduct[];
}

const CardContext = createContext<ICardContext>({
  products: [],
});

export default function CardContextProvider({ children }: any) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  return <CardContext.Provider value={{ products }}>{children}</CardContext.Provider>;
}
