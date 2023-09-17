import React from "react";

import MealsItemForm from "./MealItemForm";

import styles from "./MealItem.module.css"

const MealItem = (props) => {
  return (
      <li className={styles.meal}>
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <p className={styles.price}>{props.price} $</p>
        </div>
        <div className={styles.input}>
          <MealsItemForm />
        </div>
      </li>
  );
};

export default MealItem;
