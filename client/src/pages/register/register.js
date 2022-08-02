import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { CREATE_USER } from "../../utils/mutation";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./register.module.css";

const RegisterPage = (props) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // confirmPassword: "",
    isAdmin: false,
  });
  const [createUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await createUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        // confirmPassword: formState.confirmPassword,
        isAdmin: formState.isAdmin,
      },
    });

    const token = mutationResponse.data.createUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <FormContainer>
      <div className={classes["main-container"]}>
        <div className={classes.heading}>
          <h1>REGISTER</h1>
        </div>
        <Form onSubmit={handleFormSubmit}>
          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                className={classes.holder}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                className={classes.holder}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                className={classes.holder}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="pwd">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                id="pwd"
                name="password"
                className={classes.holder}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </div>

          {/* <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="pwd">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                id="pwd"
                name="confirmPassword"
                className={classes.holder}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </div> */}

          <div>
            <Button type="submit" variant="dark">
              Register
            </Button>
          </div>
        </Form>

        <Row className="py-3">
          <Col>
            Have an Account?{" "}
            <Link className={classes.register} to="/Login">
              Login{" "}
            </Link>
          </Col>
        </Row>
      </div>
    </FormContainer>
  );
};

export default RegisterPage;
