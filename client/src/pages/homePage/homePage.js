import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";

const HomePage = (props) => {
  console.log();
  return (
    <>
      <h1> WELCOME TO ECOMM WORLD </h1>
      <Products />
    </>
  );
};

export default HomePage;
