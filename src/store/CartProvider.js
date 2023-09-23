import React, {useReducer} from "react";

import CartContext from "./cart-context";

const cartState = {
  items: [],
  count: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM"){
    const updatedItems = state.items.concat(action.item);
    const updatedCount = state.count + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      count: updatedCount
    }
  }
  return cartState
};

const CartProvider = (props) => {
  const [cartStateUpdate, dispatchCartAction] = useReducer(cartReducer, cartState);

  const addToCartHandler = (item) => {
    dispatchCartAction({type: "ADD_ITEM", item:item})
  };

  const removeFromCartHandler = (id) => {

  };

  const cartContext =  {
    items: cartState.items,
    total: cartState.count,
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