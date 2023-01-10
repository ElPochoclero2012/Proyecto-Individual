import React, { useEffect } from 'react'
import ProductFormatterEach from './ProductFormatterEach';
import { useState } from 'react';
import { useParams } from 'react-router-dom';



function ProductInfo()  {

    let {id} = useParams();
    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch("http://localhost:5050/product/" + id)
          .then((res) => res.json())
          .then((data) => data.data)
          .then((resp) => {
            setProduct(resp);
          });
      }, []);

  return (
    <>
      <div className="caja">
        <div className="cardsUnique"> 
          {product.map((e, key) => {
            return (
              <ProductFormatterEach element={e} key={key} />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default ProductInfo