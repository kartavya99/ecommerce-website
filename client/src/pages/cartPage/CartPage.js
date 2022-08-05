import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ADD_TO_CART } from "../../utils/actions";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import classes from "./Cart.module.css";

import house from "../../images/house.jpg";

const product = [
  {
    _id: "p1",
    user: "user1",
    productName: "5-bed room house",
    image: house,
    brand: "NewBrand",
    description:
      "vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis",
    price: "1,000,000",
    countInStock: 5,
  },
];

const CartPage = () => {
  const [state, dispatch] = useStoreContext();
  const { cart } = state;
  console.log(cart);

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className={classes.container}>
      <Row>
        <Col>
          <h1 className={classes.h1}>Shopping Cart</h1>

          <ListGroup variant="flush">
            <Row>
              <Col md={2}>
                <Image
                  src={product[0].image}
                  alt={product[0].productName}
                  fluid
                  rounded
                />
              </Col>

              <Col me={3}>
                <Link to={`/product/2`}>{product[0].productName}</Link>
              </Col>
              <Col md={2}>{product[0].price}</Col>
              <Col me={2}>Quantity : 2</Col>
              <Col md={2}>
                <Button type="button" variant="light">
                  Remove<i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className={classes.h2}>Subtotal items</h2>$ {total}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className={classes["btn-primary"]}>
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
