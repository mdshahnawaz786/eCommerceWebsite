import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  function validateEmailPassword(data) {
    let symbol1 = 0;
    let symbol2 = 0;

    for (let i = 0; i < data.email.length; i++) {
      let ch = data.email[i];
      if (ch === "@") {
        symbol1++;
      }
      if (ch === ".") {
        symbol2++;
      }
    }

    if (symbol1 !== 1 || symbol2 !== 1) {
      return "@ & . use once only";
    }

    if (data.password.length < 4) {
      return "password should greater than 3";
    }
  }

  function validate(data) {
    if (
      data.username === "" ||
      data.name === "" ||
      data.email === "" ||
      data.password === ""
    ) {
      alert("All Field is required !!");
      return;
    } else {
      if (validateEmailPassword(data) === "@ & . use once only") {
        alert("@ & . use once only");
        return;
      } else if (
        validateEmailPassword(data) === "password should greater than 3"
      ) {
        alert("password should greater than 3");
        return;
      } else {
        localStorage.setItem("user-data", JSON.stringify(data));
        // notify()
        navigate("/login");
      }
    }
  }

  return (
    <div className="login_box_container">
      <section className="sectionTag">
        <div className="innerRegisterContainer">
          <div className="innerUpperContainer">
            <h5>
              <b>Join our Community!</b>
            </h5>
          </div>
          <div className="innerLowerContainer">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setData({
                        ...data,
                        username: e.target.value,
                      });
                    }}
                    type="name"
                    placeholder="Enter Username"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setData({
                        ...data,
                        name: e.target.value,
                      });
                    }}
                    type="text"
                    placeholder="Full Name"
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setData({
                      ...data,
                      email: e.target.value,
                    });
                  }}
                  placeholder="Email id"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setData({
                      ...data,
                      password: e.target.value,
                    });
                  }}
                  placeholder="Password"
                />
              </Form.Group>

              <Row className="mb-3"></Row>
              {/* <ToastContainer autoClose={1000} position="top-center" /> */}

              <button
                onClick={() => {
                  // validate(data)
                  validate(data);
                }}
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
