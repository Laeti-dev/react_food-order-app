import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </React.Fragment>
  );
});

export default Input;
