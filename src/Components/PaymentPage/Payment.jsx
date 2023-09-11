import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './payment.css'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';


const Payment = () => {

  const addToCart = useSelector((storeData)=>{
    return storeData.addToCart
  })

  const cartPaymentCount = useSelector((storeData)=>{
    return storeData.cartPaymentCount
  })

  const ref = useRef(0)



  return (
    <div className='paymentPage'>
       <div className="leftpaymentPage">
       <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Shipping address is the same as my billing address" />
        <Form.Check type="checkbox" label="Save this information htmlFor next time" />
      </Form.Group>

      
    </Form>
    {/* ----------------------------- */}
    <div>
    <Form>
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            label="Credit Card"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            label="Debit Card"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            label="Upi"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          
        </div>
      ))}
    </Form>
    </div>

    <div>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
       </div>
       <div className="rightPaymentPage">
        <h1>Your Cart {addToCart.length}</h1>


       <ListGroup as="ol" numbered>
      {addToCart.map((ele,idx)=>{
        ref.current += parseInt(ele.price)
        return(
          <>
            <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{ele.title}</div>
         {cartPaymentCount[ele.id -1]}
        </div>
        <Badge bg="primary" pill>
         {ele.price}
        </Badge>
      </ListGroup.Item>
          </>
        )
      })}
    </ListGroup>
    <h1>Total: {ref.current}</h1>
       </div>
    </div>
  )
}

export default Payment