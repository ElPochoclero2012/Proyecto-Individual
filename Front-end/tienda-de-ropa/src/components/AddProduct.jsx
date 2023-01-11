import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


function AddProduct() {

    const [data, setData] = useState({
      name:'',
      image:'',
      price:0,
      category:1
    })


    const handleChange = (e) => {

      if(e.target.name === 'image'){
        setData({
          ...data,
          [e.target.name]: e.target.files,
        })

      }else{
          setData({
          ...data,
          [e.target.name]: e.target.value
        })
      }

    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("image", data.image[0]);

      fetch('http://localhost:5050/product',{
        method:'POST',
        body: formData,
      }).then((res) => 
        res.json()
      ).then(data => console.log(data))
      .catch((err) => console.log(err))
      
    }

  return(
    <>
    <Form className="Form" onSubmit={handleSubmit}>

    <p className="Title">Want to add a PRODUCT? </p><p className="Title">Complete this!</p>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter a name" required/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" onChange={handleChange} placeholder="Enter price" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" id="category" onChange={handleChange}>
          <option>...</option>
          <option value={1}>T-shirt</option>
          <option value={2}>Sweatshirt</option>
          <option value={3}>Hoodie</option>
          <option value={4}>Flag</option>
          <option value={5}>Vinyl</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Add a image</Form.Label>
        <Form.Control type="file" name="image" onChange={handleChange} required /> <br/>
      </Form.Group>


      
      <Button variant="success" type="submit" className="SubmitButton">
        Submit!
      </Button>
      

    </Form>
    </>
  )
}

export default AddProduct;