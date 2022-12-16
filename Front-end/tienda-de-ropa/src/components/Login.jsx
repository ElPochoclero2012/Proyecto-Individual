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

  return (
    <>
    
    </>
  )
}

export default Login