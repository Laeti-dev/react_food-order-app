import React, {useState} from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css"

const MealsItemForm = (props) => {
  const [itemQuantity, setItemQuantity] = useState("0")

  const quantityHandler = () => {
    console.log(itemQuantity)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(itemQuantity)
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
      />
      <button>Add</button>
    </form>
  )
};

export default MealsItemForm;
