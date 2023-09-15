import React from "react";

import Button from "../../UI/Card/Button/Button";

import style from "./Header.module.css";
import foodImage from "../../assets/foodiesfeed.com_healthy-foods.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h2>ReactMeals</h2>
        <Button>Your cart</Button>
      </header>
      <img src={foodImage} alt="healthy food"/>
    </React.Fragment>
  );
};

export default Header
