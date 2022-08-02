import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { CREATE_USER } from "../../utils/mutation";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./register.module.css";

const RegisterPage = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [createUser] = useMutation(CREATE_USER);

  return (
    <FormContainer>
      <div className={classes["main-container"]}>
        <div className={classes.heading}>
          <h1>REGISTER</h1>
        </div>
        <Form>
          <div className={classes.title}>
            <Form.Group controlId="name">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="First Name"
                id="firstName"
                name="fistName"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="name">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="email">
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="password">
              <Form.Label htmlFor="pwd">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                id="pwd"
                name="pwd"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="confirmPassword">
              <Form.Label htmlFor="pwd">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                id="pwd"
                name="pwd"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

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
