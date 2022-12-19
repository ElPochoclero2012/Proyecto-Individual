import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductFormatter from './ProductFormatter';

function Search() {

    const{filter} = useParams();

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
                if(e.name.toLowerCase().includes(filter)) {
                    return (
                        <ProductFormatter element={e} key={key} />
                    );
                }
            })}
        </div>
    </div>
  )
}

export default Search