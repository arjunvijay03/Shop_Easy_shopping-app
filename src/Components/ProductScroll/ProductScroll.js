import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductScroll.css";
import Data from "../../Data/Data";
import { useNavigate } from "react-router-dom";
function ProductScroll({category}) {
  const navigate = useNavigate()
  return (
    <div className="productScrollParentDiv">



      <div className="productScrollContainer">
        <div className="productScrollTitle">
          <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          <button onClick={()=>{
            navigate(`/viewmore/${category}`)
          }} className="viewMoreBtn">View more <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="productsWrapper">
          {
          Data.filter(item => item.category == category).map((element, index) =>{

            return <ProductCard product= {element} key={index}></ProductCard>
          })
          }
        </div>
      </div>


      
    </div>
  );
}

export default ProductScroll;
