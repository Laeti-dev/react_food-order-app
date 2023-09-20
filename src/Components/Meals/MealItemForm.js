import React, {useState} from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css"

const MealsItemForm = (props) => {
  const [itemQuantity, setItemQuantity] = useState("0")

  const quantityChangeHandler = (event) => {
    console.log(event.target.value)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(quantityChangeHandler)
  }
  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
      <Input
        label="quantity"
        input={{
          id: "qty" + props.id,
          type: "number",
          min: "0",
          max: "10",
          defaultValue: "0"
        }}
        onChange={quantityChangeHandler}
      />
      <button>Add</button>
    </form>
  )
};

export default MealsItemForm;
