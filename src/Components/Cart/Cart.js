import React from "react";

import Modal from "../../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li id={item.id}>{item.name}</li>
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
      <div>
        <button onClick={props.onCloseCart}>Cancel</button>
        <button>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;
