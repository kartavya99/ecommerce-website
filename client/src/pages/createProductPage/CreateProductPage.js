import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./CreateProductPage.module.css";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../utils/mutation";
// import Loader from "../../components/Loader/Loader";
import { LinkContainer } from "react-router-bootstrap";

const CreateProductPage = () => {
  const [formState, setFormState] = useState({
    productName: "",
    image: "",
    brand: "",
    description: "",
    price: 0,
    countInStock: 0,
    uploading: "false",
  });

  const [createProduct, { error }] = useMutation(CREATE_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(parseInt(formState.price));
      const mutationResponse = await createProduct({
        variables: {
          productName: formState.productName,
          image: formState.image,
          brand: formState.brand,
          description: formState.description,
          price: parseInt(formState.price),
          countInStock: parseInt(formState.countInStock),
          uploading: formState.uploading,
        },
      });
      console.log(mutationResponse);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleChangeInt = (event) => {
  //   const { name, value } = parseFloat(event.target);
  //   console.log(event.target);
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // const uploadFileHandler = async (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   formState.uploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     const { data } = await axios.post("/api/upload", formData, config);

  //     formState.image(data);
  //     formState.uploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     formState.image(false);
  //   }
  // };

  return (
    <div className={classes.container}>
      <div className={classes.link}>
        <Link to="/admin/productlist" className="btn btn-light my-3">
          Go Back
        </Link>
      </div>
      <FormContainer>
        <p className={classes.heading}>EDIT PRODUCT</p>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor="productName">Product Name</Form.Label>
            <Form.Control
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter Product Name"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="price">Product price</Form.Label>
            <Form.Control
              type="number"
              id="price"
              name="price"
              placeholder="Enter Product Price"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="image">Image</Form.Label>
            <Form.Control
              type="text"
              id="image"
              name="image"
              placeholder="Enter image"
              onChange={handleChange}
            ></Form.Control>
            {/* {formState.uploading && <Loader />} */}

            {/* <input
              type="text"
              className="custom-file-input"
              id="inputGroupFile01"
            /> */}

            {/* <Form.File
              id="image-file"
              label="Choose File"
              custom
              onChange={handleChange}
            ></Form.File> */}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label htmlFor="brand">Brand</Form.Label>
            <Form.Control
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter Brand Name"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="countInStock">Count In Stock</Form.Label>
            <Form.Control
              type="number"
              id="countInStock"
              name="countInStock"
              placeholder="Enter stock count"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              name="description"
              placeholder="Enter product description"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          {/* <Form.Group>
            <Form.Label htmlFor="user">User Name</Form.Label>
            <Form.Control
              type="text"
              id="user"
              name="user"
              placeholder="Enter User Name"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group> */}

          {error ? (
            <div>
              <p className="error-text">Please provided all the details</p>
            </div>
          ) : null}

          <Button
            type="submit"
            variant="dark"
            className={classes["btn-update"]}
          >
            Create
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default CreateProductPage;
