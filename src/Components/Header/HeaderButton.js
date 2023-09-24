import React, {useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import styles from "./HeaderButton.module.css";

const Button = (props) => {
  const cartContext = useContext(CartContext);

  const countCartItems = cartContext.items.reduce((currCount, item)=>{
    return (currCount + item.quantity)
  }, 0)

  return (
    <button
      className={styles.btn}
      onClick={props.onSeeCart}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{countCartItems}</span>
    </button>
  )
};

export default Button;
