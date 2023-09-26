import React, {useReducer} from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  total: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotal = state.total + action.item.price * action.item.quantity;
    const cartItemIndex = state.items.findIndex(
      // if true, returns item's index
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[cartItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity
      };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      total: updatedTotal,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartStateUpdate, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

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
