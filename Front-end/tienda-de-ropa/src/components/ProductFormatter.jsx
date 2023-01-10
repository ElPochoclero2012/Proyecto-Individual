import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const ProductFormatter = (props) => {

    const { addItem } = useCart();

  return (

    <div className="card" key={props.index}>
        <Link to={"/ProductInfo/" + props.element.id}> <img src={props.element.image} alt="ProductImage" className="imageProduct" /> </Link>
        <div className="text">
            <h5>{props.element.name}</h5>
            <p>${props.element.price}</p>
            <button onClick={() => addItem(props.element)}>Add to cart!</button>
        </div>
    </div>
  )
}

export default ProductFormatter