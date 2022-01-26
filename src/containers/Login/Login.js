import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../lib/contextLib";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, showAlert] = useState(false);
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(users.length > 0){
      for(const user of users){
        if(user.email === email && user.password === password){
          userHasAuthenticated(true);
          localStorage.setItem('isAuth','true');
          showAlert(false)
          history.push("/dashboard");
        }else{
          showAlert(true)
        }
      }
    }else{
      showAlert(true)
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block="false" size="md" className="loginButton" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      {alert && 
    <Toast style={{
      position: 'absolute',
      top: 30,
      right: 30
    }}  onClose={() => showAlert(false)} show={alert} bg='danger' delay="3000" autohide>
      <Toast.Header>
        <strong className="mr-auto">Error!</strong>
      </Toast.Header>
      <Toast.Body className="text-white">Invalid Email or Password</Toast.Body>
    </Toast>
   }
    </div>
  );
}