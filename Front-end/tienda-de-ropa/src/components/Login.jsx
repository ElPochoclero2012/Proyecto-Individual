import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Login() {

    const [inputs, setInputs] = useState({});
    
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault();

    fetch('http://localhost:5050/user/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(inputs)
    }).then((res) => 
      res.json() 
    ).then(data => console.log(data))
    .catch((err) => console.log(err))
  }

  return (
    <>
      <Form className="Form" onSubmit={handleSubmit}>
      <p className="Title">Log in!</p>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Form.Text className="text-muted">
          You don't have an account? <a href="./register">Sign up!</a>
        </Form.Text>
      </Form.Group>


      <Button variant="success" type="submit" className="SignUpButton">
        Sign in
      </Button>

    </Form>
    </>
  )
}

export default Login