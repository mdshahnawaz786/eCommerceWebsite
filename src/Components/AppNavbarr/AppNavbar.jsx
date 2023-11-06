import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./AppNav.css";

const AppNavbar = ({ isLogin, setLogin }) => {
  const addToCart = useSelector((storeData) => {
    return storeData.addToCart;
  });

  const [useData, setUserdata] = useState("");

  useEffect(() => {
    setUserdata(JSON.parse(localStorage.getItem("user-data")));
  }, []);

  function reload() {
    window.location.reload();
  }

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <img
              onClick={() => {
                navigate("/");
              }}
              id="site_logo"
              src="https://static.vecteezy.com/system/resources/previews/007/410/289/original/online-shop-logo-design-vector.jpg"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <Nav.Link href="#action1">Home</Nav.Link>
              </Link>
              <Link to="/product">
                <Nav.Link href="#action2">Product</Nav.Link>
              </Link>
              <Link to="/about">
                <Nav.Link href="#action2">About</Nav.Link>
              </Link>
              <Link to="/contact">
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              {isLogin ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    🙏🏻 {useData ? useData.name : "Welcome"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        localStorage.removeItem("user-data");
                        setLogin(
                          localStorage.setItem("isLogin", JSON.stringify(false))
                        );
                        reload();
                      }}
                      href="#/action-1"
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <Button variant="outline-success">
                    <i class="fa-solid fa-right-to-bracket"></i> Login
                  </Button>
                </Link>
              )}

              {!isLogin ? (
                <Link to="/register">
                  <Button variant="outline-success">Register</Button>
                </Link>
              ) : null}
              <Link to="cart">
                <Button variant="outline-success">
                  <i class="fa-solid fa-cart-shopping"></i> {addToCart.length}
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
