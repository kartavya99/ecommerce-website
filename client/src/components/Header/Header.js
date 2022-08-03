import React from "react";
import Button from "react-bootstrap/Button";
import Auth from "../../utils/auth";
import { Container, Nav, Navbar, Form, NavDropdown } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="-xl">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className={classes["nav-logo"]}>
              E-comm Shop
            </Navbar.Brand>
          </LinkContainer>
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
            <LinkContainer to="login">
              <Nav.Link className={classes["nav-link"]}>SIGN IN</Nav.Link>
            </LinkContainer>

            <Nav.Link
              className={classes["nav-link"]}
              onClick={() => Auth.logout}
            >
              LOGOUT
            </Nav.Link>
            <Nav.Link className={classes["nav-link"]}>PROFILE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
