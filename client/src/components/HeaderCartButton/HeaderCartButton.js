import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../CartComp/CartIcon";

const HeaderCartButton = () => {
  return (
    <button>
      <span className={classes.icon}>CART</span>
      <span></span>
      <span> </span>
    </button>
  );
};

export default HeaderCartButton;
