import React from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderButton.module.css";

const Button = (props) => {

  return (
    <button
      className={styles.btn}
      onClick={props.onSeeCart}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>0</span>
    </button>
  )
};

export default Button;
