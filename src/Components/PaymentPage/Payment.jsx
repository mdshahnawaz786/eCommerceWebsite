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
        <hr />
        <h3>Billing Address</h3>
        <hr />
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

      <hr />

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Shipping address is the same as my billing address" />
        <Form.Check type="checkbox" label="Save this information htmlFor next time" />
      </Form.Group>

      
    </Form>
    <hr />
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
    <hr />
    </div>

    <div>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="email" placeholder="Enter card no" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name on Card</Form.Label>
          <Form.Control type="password" placeholder="Enter Name on card" />
        </Form.Group>
      </Row>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label >Expiry</Form.Label>
          <Form.Control placeholder="MM/YY"/>
        </Form.Group>

        

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CVV</Form.Label>
          <Form.Control placeholder="987"/>
        </Form.Group>
      </Row>

      

      <div className="d-grid gap-2">
      <Button className='pay' variant="primary" size="lg">
        Click to Pay
      </Button>
      
    </div>
    </Form>
    </div>
       </div>
       <div className="rightPaymentPage">
        <hr />
        <div className="cartpageTop">
        <h3>Your Cart</h3>
        <div className='length'><h3>{addToCart.length}</h3></div>
        </div>
        <hr />


       <ListGroup as="ol" numbered>
      {addToCart.map((ele,idx)=>{
        let sum = parseInt(ele.price * cartPaymentCount[ele.id - 1])
        ref.current = ref.current+sum
        return(
          <>
            <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{ele.title}</div>
         Quantity: {cartPaymentCount[ele.id -1]}
        </div>
        <Badge bg="primary" pill>
        ₹ {ele.price * cartPaymentCount[ele.id -1]}
        </Badge>
      </ListGroup.Item>
          </>
        )
      })}
      <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Total</div>
                      
                    </div>
                    <Badge bg="primary" pill>
                    ₹ {ref.current.toFixed(2)} 
                    </Badge>
                  </ListGroup.Item>
    </ListGroup>
    
    


          
       </div>
    </div>
  )
}

export default Payment