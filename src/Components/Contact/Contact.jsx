import React from 'react'
import Form from 'react-bootstrap/Form';
import './contact.css'


const Contact = () => {
  return (
    <>
    <div className='ContactMainContainer'>
      <div className="headingContactContainer">
        <h1><b>Have Some Question?</b></h1>
        <hr />
      </div>
      <div className="formConCont">
        <div className="imgContact">
          <img src="https://e-mart-sooty.vercel.app/assets/images/contact.png" alt="loading" />
        </div>
        <div className="rightFormContainer">
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="John Smith" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <button className='submitBtn'>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact