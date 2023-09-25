import React, {useReducer} from "react";

import CartContext from "./cart-context";

const cartState = {
  items: [],
  total: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM"){
    const updatedTotal = state.total + action.item.price * action.item.quantity;

    // finds index if item exists
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    // get the item by its index
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    // if item exists in items
    if (existingItem) {
      // create a new object taking all the former object items
      // and calculate qty
      const updatedItem = {
        ...existingItem,
        total: existingItem.total + action.item.total
      };
      // update items array
      updatedItems= [...state.items ];
      updatedItems[existingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    // const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      total: updatedTotal
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
