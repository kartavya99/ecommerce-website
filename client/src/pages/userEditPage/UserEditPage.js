import React from "react";
import { Link } from "react-router-dom";
import FormContainer from "../../components/Form/FormContainer";
import { Form, Button } from "react-bootstrap";

import classes from "./UserEditPage.module.css";
const UserEditPage = () => {
  return (
    <div>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <div>
          <p>EDIT USER </p>
        </div>
        <Form>
          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                className={classes.holder}
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Is Admin"
                id="isAdmin"
              ></Form.Check>
            </Form.Group>
          </div>

          <Button
            type="submit"
            variant="dark"
            className={classes["btn-primary"]}
          >
            Update
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default UserEditPage;
