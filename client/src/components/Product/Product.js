import React from "react";
import dummy_products from "./ProductData";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import classes from "./product.module.css";

const Products = ({}) => {
  //   console.log(dummy_project);
  return (
    <div>
      <h4 className={classes["product-heading"]}>LATEST PRODUCTS</h4>
      <div className={classes["container-fluid"]}>
        {dummy_products.map((product) => (
          <Card className="my-3 p-3 rounded" key={product._id}>
            <Card.Img src={product.image} variant="top" />

            <Card.Body>
              <Card.Title>
                <strong>{product.productName}</strong>
              </Card.Title>

              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
