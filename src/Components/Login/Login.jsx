import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const [getUser, setGetUser] = useState("")
    const [loginUser, setLoginUser ] = useState({
        email: "",
        password: ""
    })
    useEffect(()=>{
        setGetUser(JSON.parse(localStorage.getItem("userDetail")))
    },[])
  return (
    <div className='LoginContainer'>
        <div className='loginBox'>
        <h2><b>Login</b></h2>
            <hr />
        <Form>
        <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="name" placeholder="Enter email" onChange={((e)=>{
                    setLoginUser({
                        ...loginUser,
                        email:e.target.value
                    })
                })} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password"  onChange={((e)=>{
                    setLoginUser({
                        ...loginUser,
                        password:e.target.value
                    })
                })} />
            </Form.Group>
            <button className='loginBtn' onClick={(()=>{
                console.log(getUser);
                console.log(loginUser);
                if(getUser.email === loginUser.email && getUser.password === loginUser.password){
                    alert("Login sucessful")
                    navigate("/")
                }else{
                    alert("Login falied")
                }
            })}>Login</button><br /><br />
            {/* <div > */}
              <p>Don't have an account? &nbsp;<Link className='createAcBtn' to="/register"> <b>Create an account</b></Link></p>
            {/* </div> */}
        </Form>
        </div>
    </div>
  )
}

export default Login