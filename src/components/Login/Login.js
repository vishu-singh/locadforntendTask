import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import { postRequest } from '../../api';
import { toast } from 'react-toastify';

export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = props.history;
  useEffect(() => {
    localStorage.clear();
  }, []);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const res = await postRequest('locad/user/login', {
        userName: email,
        password,
      });
      if (res.data.status == 200) {
        localStorage.setItem('token', res.data.data.token);
        history.push('/products');
      }
      
    } catch (err) {
      toast.dark(err.response.data.message);
    }
  }
  return (
    <>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
          {/* <Button  theme="primary" label="Login" /> */}
        </Form>
      </div>
    </>
  );
};
