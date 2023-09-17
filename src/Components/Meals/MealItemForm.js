import React from "react";

import styles from "./MealItemForm.module.css"

const MealsItemForm = () => {
  return (
    <form className={styles.form}>
      <label>Quantity</label>
      <input
        type="number"
        min="0"
        max="10"
        defaultValue="0"
      />
    <button>Add</button>
    </form>
  )
};

export default MealsItemForm;
