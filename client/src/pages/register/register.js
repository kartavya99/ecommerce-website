import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./register.module.css";

const registerPage = () => {
  return (
    <FormContainer>
      <div className={classes["main-container"]}>
        <Form>
          <div className={classes.title}>
            <Form.Group controlId="name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="First Name"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Last Name"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
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

export default registerPage;
