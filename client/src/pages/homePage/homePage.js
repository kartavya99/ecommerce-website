import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import ProductList from "../../components/ProductList/ProductList";
import RenderProductList from "../../components/ProductList/RenderProductList";

// import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  return (
    <>
      <h1> WELCOME TO ECOMM WORLD </h1>
      <ProductList />
    </>
  );
};

export default HomePage;
