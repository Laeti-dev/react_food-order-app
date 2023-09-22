import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.label.id}>{props.label}</label>
      <input {...props.input}/>
    </React.Fragment>
  )
};

export default Input;
