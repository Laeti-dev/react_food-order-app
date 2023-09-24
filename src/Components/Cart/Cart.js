import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const hasItems = cartContext.items.length > 0

  return(
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles["cart-total"]}>
        <span>Total qty</span>
        <span>$$</span>
      </div>
      <div className={styles["cart-actions"]}>
        <button className={styles.cancel} onClick={props.onCloseCart}>Cancel</button>
        {hasItems && <button className={styles.order}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;
