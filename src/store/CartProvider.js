import React, {useReducer} from "react";

import CartContext from "./cart-context";

const cartState = {
  items: [],
  total: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM"){
    const updatedItems = state.items.concat(action.item);
    const updatedCount = state.total + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      total: updatedCount
    };
  }
  return cartState;
};

const CartProvider = (props) => {
  const [cartStateUpdate, dispatchCartAction] = useReducer(cartReducer, cartState);

  const addToCartHandler = (item) => {
    dispatchCartAction({type: "ADD_ITEM", item:item});
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE_ITEM", id:id});
  };

  const cartContext =  {
    items: cartStateUpdate.items,
    total: cartStateUpdate.total,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
