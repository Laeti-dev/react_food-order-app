import React, { useContext } from "react";

import MealsItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

import styles from "./MealItem.module.css"

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addItemHandler = (quantity) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price
    })
  };

  return (
      <li className={styles.meal}>
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <p className={styles.price}>{props.price} $</p>
        </div>
        <div className={styles.input}>
          <MealsItemForm onAddItemToCart={addItemHandler}/>
        </div>
      </li>
  );
};

export default MealItem;
