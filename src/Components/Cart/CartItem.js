import React from "react";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles["cart-items"]}>
      <h2>{props.name}</h2>
      <div className={styles["items-info"]}>
        <div>
          <span>$ {props.price}</span>
          <span> x {props.quantity}</span>
        </div>
        <div >
          <button> - </button>
          <button> + </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
