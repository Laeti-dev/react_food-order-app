import React from "react";

import Card from "../../UI/Card/Card";
import MealItem from "./MealItem";
import MealsSummary from "./MealsSummary";

import styles from "./Meals.module.css";

const Meals = () => {
  return(
    <React.Fragment>
        <MealsSummary />
        {/* map through meals items object */}
        <MealItem />
    </React.Fragment>
  )
};

export default Meals;
