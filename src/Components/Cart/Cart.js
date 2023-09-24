import React, { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
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
        <span>$ {cartContext.total}</span>
      </div>
      <div className={styles["cart-actions"]}>
        <button className={styles.cancel} onClick={props.onCloseCart}>Cancel</button>
        {hasItems && <button className={styles.order}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;
