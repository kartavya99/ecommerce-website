import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <Row>
          <Col className={classes.footer}>Copyright &copy; Ecomm Shop</Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
