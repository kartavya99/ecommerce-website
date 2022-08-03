import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import classes from "./ProductListPage.module.css";

function ProductListPage() {
  return (
    <div className={classes.container}>
      <Row>
        <Col className={classes.heading}> PRODUCTS</Col>
        <Col className="text-right">
          <Button className={classes["btn-primary"]}>➕ CREATE PRODUCT</Button>
        </Col>
      </Row>
      <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>product_id</td>
              <td>product- productName</td>
              <td>product -price</td>

              <td>product-brand</td>
              <td>
                <LinkContainer to={`/admin/product/1/edit`}>
                  <Button variant="light" className="btn-sm">
                    ⏏️
                  </Button>
                </LinkContainer>
                <Button variant="danger" className="btn-sm">
                  👎
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    </div>
  );
}

export default ProductListPage;
