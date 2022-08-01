import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";

const registerPage = () => {
  return (
    <FormContainer>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" placeholder="First Name"></Form.Control>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="name" placeholder="Last Name"></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link className="btn btn-dark m-4" to="/login">
            Login{" "}
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default registerPage;
