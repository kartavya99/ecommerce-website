import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import classes from "./Product.module.css";

const RenderProductList = ({ data }) => {
  return (
    <>
      <div className={classes.container}>
        {data.getAllProducts.map((product) => {
          // console.log(product._id);
          return (
            <Card
              className="m-3 p-3 rounded"
              style={{ width: "18rem" }}
              key={product._id}
            >
              <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
              </Link>

              <Card.Body>
                <Link to={`/products/${product._id}`}>
                  <Card.Title as="div">
                    <strong>{product.productName}</strong>
                  </Card.Title>
                </Link>

                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default RenderProductList;
