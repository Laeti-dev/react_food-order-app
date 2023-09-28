import React, { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const removeItemFromCart = (id) => {
    cartContext.removeItem(id);
  };

  const AddItemToCart = (item) => {
    cartContext.addItem(item);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove = {removeItemFromCart.bind(null,item.id)}
          onAdd = {AddItemToCart.bind(null,item)}
        />
      ))}
    </ul>
  );

  const hasItems = cartContext.items.length > 0

  return(
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles["cart-total"]}>
        <span>Total</span>
        <span>$ {cartContext.total.toFixed(2)}</span>
      </div>
      <div className={styles["cart-actions"]}>
        <button className={styles.cancel} onClick={props.onCloseCart}>Cancel</button>
        {hasItems && <button className={styles.order}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;
