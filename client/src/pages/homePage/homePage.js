import React from "react";
// import { Row, Col } from "react-bootstrap";
import ProductList from "../../components/ProductList/ProductList";
// import Loader from "../../components/Loader/Loader";

const HomePage = (props) => {
  console.log();
  return (
    <>
      <h1> WELCOME TO ECOMM WORLD </h1>
      <ProductList />
    </>
  );
};

export default HomePage;
