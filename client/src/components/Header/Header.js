import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="dark" variant="light" expand="-xl">
        <Container>
          <Navbar.Brand className={classes["nav-logo"]}>
            E-comm Shop
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search product"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
          <NavDropdown
            title="Admin"
            id="adminmenu"
            className={classes["nav-link"]}
          >
            <NavDropdown.Item>Users</NavDropdown.Item>
            <NavDropdown.Item>Products</NavDropdown.Item>
            <NavDropdown.Item>Orders</NavDropdown.Item>
          </NavDropdown>
          <Nav className="navbar-nav ml-auto d-flex flex-row-reverse">
            <Nav.Link className={classes["nav-link"]}>CART</Nav.Link>
            <Nav.Link className={classes["nav-link"]}>SIGN IN</Nav.Link>
            <Nav.Link className={classes["nav-link"]}>Logout</Nav.Link>
            <Nav.Link className={classes["nav-link"]}>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
