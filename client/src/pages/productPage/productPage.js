import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
import Loader from "../../components/Loader/Loader";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

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
                  <Col></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control as="select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  onClick={addToCart}
                  className="btn btn-dark btn-sm"
                  type="button"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
