import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./Homepage.module.css";

// import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  return (
    <>
      <h1 className={classes.heading}> ECOMMERECE PLATFORM </h1>
      <ProductList />
    </>
  );
};

export default HomePage;
