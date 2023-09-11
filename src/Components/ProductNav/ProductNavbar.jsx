import React, {  useState } from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { searchFn, setCategory } from '../../Functions/function';
import './productNav.css'


const ProductNavbar = () => {

  const [input, setInput] = useState('')

  const product = useSelector((storeData)=>{
    return storeData.product
  })
  // console.log(product);
  const dispatch = useDispatch()

 

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={(()=>{
                  setCategory("all", product, dispatch)
              })}>
                All
              </Nav.Link>

              <Nav.Link onClick={(()=>{
                  setCategory("men's clothing", product, dispatch)
              })}>
                Men's Clothing
              </Nav.Link>

              <Nav.Link onClick={(()=>{
                  setCategory("women's clothing", product, dispatch)
              })}>
                Women's Clothing
              </Nav.Link>

              <Nav.Link onClick={(()=>{
                  setCategory("jewelery", product, dispatch)
              })}
              >
                Jewelery's
              </Nav.Link>

              <Nav.Link onClick={(()=>{
                  setCategory("electronics", product, dispatch)
              })}
              >
                Electronics
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                 className="me-2"
                 aria-label="Search"
                 value={input}
                 onChange={((e)=>{
                  setInput(e.target.value)
                 })}
              />
             
              <Button variant="outline-danger" onClick={(()=>{
                searchFn(input,product,dispatch)
              })}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default ProductNavbar

