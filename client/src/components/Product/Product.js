import React from "react";
import dummy_project from "./ProductData";
import Card from "react-bootstrap/Card";
import classes from "./product.module.css";

const Products = (props) => {
  //   console.log(dummy_project);
  return (
    <div>
      <h4 className={classes["product-heading"]}>LATEST PRODUCTS</h4>
      <div className={classes["container-fluid"]}>
        {dummy_project.map((project) => (
          <Card key={project._id} className={classes.card}>
            <Card.Img
              variant="top"
              src={project.image}
              className={classes.img}
            />
            <Card.Body>
              <Card.Title>
                <h4>{project.productName}</h4>
              </Card.Title>
              <Card.Text as="h4">${project.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
