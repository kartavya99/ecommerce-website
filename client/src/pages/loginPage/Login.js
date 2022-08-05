import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutation";
import Auth from "../../utils/auth";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/Form/FormContainer";
import classes from "./Login.module.css";
import { useStoreContext } from "../../utils/GlobalState";

const Login = (user) => {
  // const [state, dispatch] = useStoreContext;
  // console.log(state);

  // const { _id, firstName, lastName, email, isAdmin } = user;
  // console.log(user);

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log(mutationResponse.data.login);
      console.log(mutationResponse.data.login.user);

      const isAdmin = mutationResponse.data.login.user.isAdmin;
      const token = mutationResponse.data.login.token;
      Auth.login(token, isAdmin);
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

  return (
    <FormContainer>
      <div className={classes["main-container"]}>
        <div className={classes.heading}>
          <h1>SIGN IN</h1>
        </div>
        <Form onSubmit={submitFormHandler}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              id="email"
              placeholder="Enter email address"
              className={classes.holder}
              onChange={handleChange}
            />
            <div children={classes.text}>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="pwd">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              id="pwd"
              className={classes.holder}
              onChange={handleChange}
            />
          </Form.Group>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}

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
