import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const RenderProductList = ({ data }) => {
  // console.log(data);
  console.log(data.getAllProducts);
  return (
    <>
      <h1>Product List from Product list </h1>

      {data.getAllProducts.map((product) => {
        return (
          <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                  <strong>{product.productName}</strong>
                </Card.Title>
              </Link>

              <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default RenderProductList;
