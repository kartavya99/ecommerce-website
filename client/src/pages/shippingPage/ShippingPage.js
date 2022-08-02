import React from "react";
import FormContainer from "../../components/Form/FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";
import classes from "./Shipping.module.css";

const ShippingPage = (props) => {
  return (
    <FormContainer>
      <div className={classes["main-container"]}>
        <div className={classes.heading}>
          <h1>SHIPPING</h1>
        </div>
        <Form>
          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                id="address"
                name="address"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="city">city</Form.Label>
              <Form.Control
                type="text"
                placeholder="city"
                id="city"
                name="city"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="postalCode">PostalCode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postal code"
                id="postalCode"
                name="postalCode"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div className={classes.title}>
            <Form.Group>
              <Form.Label htmlFor="country">Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                id="country"
                name="country"
                className={classes.holder}
              ></Form.Control>
            </Form.Group>
          </div>

          <div>
            <Button type="submit" variant="dark">
              CONTINUE
            </Button>
          </div>
        </Form>
      </div>
    </FormContainer>
  );
};

export default ShippingPage;
