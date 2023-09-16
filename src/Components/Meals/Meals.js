import React from "react";

import Card from "../../UI/Card/Card";

import styles from "./Meals.module.css";

const Meals = () => {
  return(
    <React.Fragment>
      <Card className={styles.meal}>
        <div>
          <h2>Meal name</h2>
          <p>Meal description</p>
          <p>Meal price</p>
        </div>
        <div>
          <form>
          <label>Quantity</label>
          <input
              type="number"
              min= "0"
              max= "10"
          />
          </form>
          <button type="submit">Add</button>
        </div>
      </Card>
    </React.Fragment>
  )
};

export default Meals;
