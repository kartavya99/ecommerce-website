import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./login.module.css";

const Login = () => {
  return (
    <FormContainer>
      <div className={classes["main-container"]}>
        <div className={classes.heading}>
          <h1>Sign In</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              className={classes.holder}
            />
            <div children={classes.text}>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className={classes.holder}
            />
          </Form.Group>
          <div className={classes.button}>
            <Button type="submit" variant="dark">
              Sign In
            </Button>
          </div>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer?
            <Link className={classes.register} to="/register">
              Register
            </Link>
          </Col>
        </Row>
      </div>
    </FormContainer>
  );
};

export default Login;
