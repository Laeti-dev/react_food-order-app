import React from "react";

import CartIcon from "../CartIcon/CartIcon";
import style from "./HeaderButton.module.css";

const Button = (props) => {
  return (
    <button
      type="submit"
      onClick={props.children}
      className={style.btn}
    >
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
    </button>
  )
};

export default Button;
