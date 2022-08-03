import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./ProductEditPage.module.css";

const ProductEditPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.link}>
        <Link to="/admin/productlist" className="btn btn-light my-3">
          Go Back
        </Link>
      </div>
      <FormContainer>
        <p className={classes.heading}>EDIT PRODUCT</p>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="productName">Product Name</Form.Label>
            <Form.Control
              type="productName"
              id="productName"
              placeholder="Enter Product Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="price">Product price</Form.Label>
            <Form.Control
              type="number"
              id="price"
              placeholder="Enter Product Price"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="image">Image</Form.Label>
            <Form.Control
              type="text"
              id="image"
              placeholder="Enter image"
            ></Form.Control>
            {/* <Form.File id="image-file" label="Choose File" custom></Form.File> */}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="brand">Brand</Form.Label>
            <Form.Control
              type="text"
              id="brand"
              placeholder="Enter Brand Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="countInStock">Count In Stock</Form.Label>
            <Form.Control
              type="number"
              id="countInStock"
              placeholder="Enter stock count"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              placeholder="Enter product description"
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            variant="dark"
            className={classes["btn-update"]}
          >
            Update
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ProductEditPage;
