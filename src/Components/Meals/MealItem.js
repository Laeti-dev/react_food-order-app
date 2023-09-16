import React from "react";

const MealItem = (props) => {
  return (
    <input
        type={props.type}
        min= {props.min}
        max= {props.max}
      />
  );
};

export default MealItem;
