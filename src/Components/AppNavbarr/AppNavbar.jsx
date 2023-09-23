import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppNavbar = () => {

  const addToCart = useSelector((storeData)=>{
    return storeData.addToCart
  })

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to='/'>
              Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#action1">
            <Link to='/product'>
              Product
              </Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to='/about'>About</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
            <Link to='/contact'>Contact</Link>
              </Nav.Link>

            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            

            <Link to='/login'><Button variant="outline-success"><i class="fa-solid fa-right-to-bracket"></i>  login</Button></Link>
            <Link to='/register'><Button variant="outline-success">register</Button></Link>
            <Link to='/cart'>
            <Button variant="outline-success"><i class="fa-solid fa-cart-shopping"></i> {addToCart.length}</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppNavbar

