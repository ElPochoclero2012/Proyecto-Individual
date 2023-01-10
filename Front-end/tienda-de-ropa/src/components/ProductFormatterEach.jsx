import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useCart } from 'react-use-cart';

const ProductFormatterEach = (props) => {

    const { addItem } = useCart();

  return (

    <div className="ProductInfo" key={props.index}>
        <img src={props.element.image} alt="ProductImage" className="imageProduct" />
        <div className="textProductInfo">
            <h5>{props.element.name}</h5>
            <p>${props.element.price}</p>
            <Button variant="outline-info" onClick={() => addItem(props.element)}>Add to cart!</Button>
        </div>
    </div>
  )
}

export default ProductFormatterEach