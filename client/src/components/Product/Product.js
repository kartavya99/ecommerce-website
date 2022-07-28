import React from "react";
import dummy_products from "./ProductData";
import Card from "react-bootstrap/Card";
import classes from "./product.module.css";

const Products = ({ Product }) => {
  //   console.log(dummy_project);
  return (
    <div>
      <h4 className={classes["product-heading"]}>LATEST PRODUCTS</h4>
      <div className={classes["container-fluid"]}>
        {dummy_products.map((product) => (
          <Card key={product._id} className={classes.card}>
            <Card.Img
              variant="top"
              src={product.image}
              className={classes.img}
            />
            <Card.Body>
              <Card.Title>
                <h4>{product.productName}</h4>
              </Card.Title>
              <Card.Text as="h4">${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
