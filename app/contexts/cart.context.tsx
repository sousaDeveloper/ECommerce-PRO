"use client";
import { createContext, useEffect, useMemo, useState } from "react";

// Utilities
import CartProduct from "@typescart.types";
import Product from "@typesproduct.types";

interface ICartContext {
  products: CartProduct[];
  formattedPrice: string;
  clearCart: () => void;
  addProductToCart: (product: Product) => void;
  removeProductInCart: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  formattedPrice: "",
  clearCart: () => {},
  addProductToCart: () => {},
  removeProductInCart: () => {},
  decreaseProductQuantity: () => {},
});

export default function CartContextProvider({ children }: any) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const productsFromLocalStorage = localStorage.getItem("cartProducts");

    if (productsFromLocalStorage) {
      return setProducts(JSON.parse(productsFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("cartProducts", JSON.stringify(products));
    }, 0);
  }, [products]);

  const clearCart = () => {
    return setProducts([]);
  };

  const productsTotalPrice = useMemo(() => products.reduce((accum, num) => accum + num.price * num.quantity, 0), [products]);

  const formattedPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(productsTotalPrice);

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
    <CartContext.Provider
      value={{ products, addProductToCart, removeProductInCart, decreaseProductQuantity, formattedPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
