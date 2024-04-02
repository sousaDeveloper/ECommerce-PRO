const CartActionTypes = {
  addProductToCart: "cart/addProduct" as const,
  clearCart: "cart/clearCart" as const,
  removeProductInCart: "cart/removeProduct" as const,
  decreaseProductQuantity: "cart/decreaseProductQuantity" as const,
};

export default CartActionTypes;
