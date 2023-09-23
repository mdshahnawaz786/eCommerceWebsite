import React, { useState } from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './register.css'
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate()
    const [registerUser, setRegisterUser] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
    })
  return (
    <div className='registerPage'>
        <div className="registerContainer">
            <h2><b>Join Our Community</b></h2>
            <hr />
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="name" placeholder="Enter Username" onChange={((e)=>{
                    setRegisterUser({
                        ...registerUser,
                        username:e.target.value
                    })
                })} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control  type="text" placeholder="Full Name" onChange={((e)=>{
                    setRegisterUser({
                        ...registerUser,
                        name:e.target.value
                    })
                })}/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Email id" onChange={((e)=>{
                setRegisterUser({
                    ...registerUser,
                    email:e.target.value
                })
              })}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" onChange={((e)=>{
                setRegisterUser({
                    ...registerUser,
                    password:e.target.value
                })
              })}/>
            </Form.Group>

            <Row className="mb-3"></Row>
            
            <button className='registerBtn' onClick={(()=>{
                localStorage.setItem("userDetail", JSON.stringify(registerUser))
                navigate('/login')
            })}>Register</button>
          </Form>
        </div>
    </div>
  )
}

export default Register