import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
import Loader from "../../components/Loader/Loader";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import classes from "./ProductPage.module.css";

const ProductPage = (item) => {
  const [qty, setQty] = useState(1);
  const [state, dispatch] = useStoreContext();
  const { image, productName, _id, price, quantity } = item;
  const { cart } = state;
  console.log(cart);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
    }
  };

  const { id } = useParams();
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    variables: { id },
  });
  if (loading) return <Loader />;

  // console.log(data);
  // console.log(data.product);
  // console.log(data.product.countInStock);

  return (
    <div className={classes.container}>
      <div>
        <Link className="btn btn-light m-4" to="/">
          GP BACK
        </Link>
      </div>

      <Row className=" m-3 pr-5">
        <Col me={6}>
          <Image
            src={data.product.image}
            alt={data.product.productName}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{data.product.productName}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${data.product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {data.product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${data.product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {data.product.countInStock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {data.product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(data.product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                    {/* <Col>{data.product.countInStock}</Col> */}
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCart}
                  className="btn btn-dark btn-sm"
                  type="button"
                  disabled={data.product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2 className="m-3">Reviews</h2>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>John Doe</strong>
              <p>04/08/2022</p>
              <p>review comment </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>
                nisl suscipit adipiscing bibendum est ultricies integer quis
                auctor elit sed vulputate mi sit amet
              </p>

              <Form>
                <Form.Group controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control as="select">
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" row="3"></Form.Control>
                </Form.Group>
                <Button type="submit" variant="dark" className="my-3">
                  Submit
                </Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
