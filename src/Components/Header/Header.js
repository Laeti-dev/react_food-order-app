import React from "react";

import HeaderButton from "./HeaderButton";

import style from "./Header.module.css";
import foodImage from "../../assets/foodiesfeed.com_healthy-foods.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h2>ReactMeals</h2>
        <HeaderButton onSeeCart={props.onCheckCart}/>
      </header>
      <img src={foodImage} alt="healthy food"/>
    </React.Fragment>
  );
};

export default Header
