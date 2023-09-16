import React from "react";

// import Card from "../../UI/Card/Card";

const MealItem = (props) => {
  return (
      <li>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </li>
  );
};

export default MealItem;
