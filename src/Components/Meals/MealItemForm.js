import React, { useRef } from "react";

import Input from "../UI/Input";

import styles from "./MealItemForm.module.css"

const MealsItemForm = (props) => {
  const quantityInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // take ref value set on Input component and format it from string to integer
    const inputQuantity = quantityInputRef.current.value;
    const quantityInt = +inputQuantity;

    // condition where it shouldn't do anything
    if (inputQuantity.trim().length === 0 || quantityInt <= 0 || quantityInt >10) {
      return
    };

    // condition to add item info to cart
    props.onAddItemToCart(quantityInt);
  };

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
      <Input
        ref={quantityInputRef}
        label="quantity"
        input={{
          id: "qty" + props.id,
          type: "number",
          min: "0",
          max: "10",
          defaultValue: "0"
        }}
      />
      <button>Add</button>
    </form>
  )
};

export default MealsItemForm;
