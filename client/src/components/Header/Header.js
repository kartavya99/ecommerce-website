import React from "react";
import Button from "react-bootstrap/Button";
import Auth from "../../utils/auth";
import { Container, Nav, Navbar, Form, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Loader from "../Loader/Loader";

import classes from "./Header.module.css";

const Header = (props) => {
  // const { loading, data } = useQuery(QUERY_ME);
  // if (loading) return <Loader />;

  // console.log(data);

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
            <LinkContainer to="/admin/userlist">
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/productlist">
              <NavDropdown.Item>Products</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item>Orders</NavDropdown.Item>
          </NavDropdown>

          <Nav>
            <LinkContainer to="/cart/:id">
              <Nav.Link className={classes["nav-link"]}>CART</Nav.Link>
            </LinkContainer>
          </Nav>

          {Auth.loggedIn() ? (
            <Nav className="navbar-nav ml-auto d-flex flex-row-reverse">
              <Nav.Link
                to="/"
                onClick={() => Auth.logout()}
                className={classes["nav-link"]}
              >
                LOGOUT
              </Nav.Link>

              {/* <LinkContainer to="/cart/:id">
                <Nav.Link className={classes["nav-link"]}>CART</Nav.Link>
              </LinkContainer> */}
              <Nav.Link className={classes["nav-link"]}>PROFILE</Nav.Link>
            </Nav>
          ) : (
            <Nav className="navbar-nav ml-auto d-flex flex-row-reverse">
              <LinkContainer to="login">
                <Nav.Link className={classes["nav-link"]}>SIGN IN</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
