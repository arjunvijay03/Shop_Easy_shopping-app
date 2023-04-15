import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Searchproductcard.css'
function SearchproductsCard({product, handleClick}) {
    const navigate = useNavigate()
    
    
  return (
   
    <div onClick={()=>handleClick(product.id)}>
      <div className="searchProducts" >
              <div className="searchProductImage">

              <img src={product.thumbnail} alt="" />
              </div>
              <div className="searchProductDes">

              <h4>{product.title}</h4>
              <p>in {product.category}</p>
              </div>
            </div>
    </div>
    
  )
}

export default SearchproductsCard
