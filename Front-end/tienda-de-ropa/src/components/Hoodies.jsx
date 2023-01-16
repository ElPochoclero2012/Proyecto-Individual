import React, { useEffect, useState } from 'react'
import ProductFormatter from './ProductFormatter';

function Hoodies() {

    const [arrayProducts, setarrayProducts] = useState([])

    useEffect(() => {
      
      fetch('http://localhost:5050/product')
            .then(res => res.json())
            .then(data => data.data)
            .then((resp) => {
              setarrayProducts(resp)
            })
   
    }, [])
    
  return (
    <div className="caja">
    <div className="cards"> 
      {arrayProducts.map((e, key) => {
        if(e.category == "3") {
        return (
          <ProductFormatter element={e} key={key} />
        );
        }
      })}
    </div>
  </div>
  )
}

export default Hoodies