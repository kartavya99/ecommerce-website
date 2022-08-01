import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import house from "../images/house.jpg";

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

const ProductPage = () => {
  console.log(product);
  console.log(product[0].user);

  return (
    <>
      <h1>Product detail</h1>
      {/* <Link>Go Back</Link> */}

      <Row>
        <Col me={6}>
          <Image src={product[0].image} alt={product[0].productName} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product[0].productName}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product[0].price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product[0].description}
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
                    <strong>${product[0].price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>In Stock</Col>
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
                <Button className="btn-block" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
