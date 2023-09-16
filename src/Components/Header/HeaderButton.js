import React from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderButton.module.css";

const Button = (props) => {
  // State for counting items in cart
  return (
    <button
      type="submit"
      onClick={props.children}
      className={styles.btn}
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
