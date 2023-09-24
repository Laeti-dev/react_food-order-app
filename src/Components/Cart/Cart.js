import React from "react";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: 'c1', name: 'Sushi', quantity: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return(
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles["cart-total"]}>
        <span>Total qty</span>
        <span>$$</span>
      </div>
      <div className={styles["cart-actions"]}>
        <button className={styles.cancel} onClick={props.onCloseCart}>Cancel</button>
        <button className={styles.order}>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;
