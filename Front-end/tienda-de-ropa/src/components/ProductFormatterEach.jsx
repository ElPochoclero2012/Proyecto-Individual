import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const ProductFormatterEach = (props) => {

    const { addItem } = useCart();

  return (

    <div className="card" key={props.index}>
        <img src={props.element.image} alt="ProductImage" className="imageProduct" />
        <div class="text">
            <h5>{props.element.name}</h5>
            <p>${props.element.price}</p>
            <button onClick={() => addItem(props.element)}>Add to cart!</button>
        </div>
    </div>
  )
}

export default ProductFormatterEach