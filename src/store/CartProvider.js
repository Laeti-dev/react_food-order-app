import React from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addToCartHandler = (item) => {

  }

  const removeFromCartHandler = (id) => {

  }

  const cartContext =  {
    item: [],
    total: 0,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
