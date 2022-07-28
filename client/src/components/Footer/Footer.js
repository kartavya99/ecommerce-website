import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <Container className={classes.container}>
        <Row>
          <Col className={classes.footer}>Copyright &copy; Ecomm Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
