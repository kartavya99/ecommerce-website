import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../../utils/actions";
// import Auth from "../../utils/auth";
// import { USER_TO_STATE } from "../../utils/actions";
import { useQuery } from "@apollo/client";
// import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { QUERY_PRODUCT } from "../../utils/queries";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

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

const CartPage = () => {
  const [total, setTotal] = useState();
  const [state, dispatch] = useStoreContext();
  const { cart } = state;
  console.log(cart);

  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);
  console.log(typeof qty);

  const { id } = useParams();
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    variables: { id },
  });

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      cart: data,
    });
  };

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      cart: data,
    });
  };

  if (loading) return <Loader />;

  return (
    <div className={classes.container}>
      <Row>
        <Col>
          <h1 className={classes.h1}>Shopping Cart</h1>

          {cart.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cart.map((item) => {
                // console.log(item);
                return (
                  <div>
                    <Row key={item._id}>
                      <Col md={2}>
                        <Image
                          src={item.product.image}
                          alt={item.product.productName}
                          fluid
                          rounded
                        />
                      </Col>

                      <Col me={3}>
                        <Link to={`/product/2`}>
                          {item.product.productName}
                        </Link>
                      </Col>
                      <Col md={2}>${item.product.price}</Col>
                      <Col me={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={addToCart}
                          // onClick={(e) =>
                          //   addToCartHandler(
                          //     item.product,
                          //     Number(e.target.value)
                          //   )
                          // }
                          // onChange={(e) =>
                          //   dispatch(
                          //     ADD_TO_CART(item.product, Number(e.target.value))
                          //   )
                          // }
                        >
                          {[...Array(item.product.countInStock).keys()].map(
                            (x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() =>
                            dispatch({
                              type: REMOVE_FROM_CART,
                              payload: item.product._id,
                            })
                          }
                        >
                          Remove<i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className={classes.h2}>
                  Subtotal ( &nbsp; {cart.reduce((acc, item) => acc + qty, 0)})
                  items
                  {console.log(qty)}
                </h2>
                ${" "}
                {cart
                  .reduce((acc, item) => acc + qty * item.product.price, 0)
                  .toFixed(2)}
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
