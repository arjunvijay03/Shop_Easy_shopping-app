import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
function ProductCard(props) {
  const navigate = useNavigate();
  
  return (
    <div
      className={`productCardParentDiv ${props.listview ? 'listView':''}`}
      onClick={() => {
        navigate(`/productview/${props.product.id}`);
      }}
    >
      <div className="cardImage">
        <img src={props.product?.thumbnail} alt="" className="productImg" />
      </div>
      <div className="productCardDetails">
        <span className="productName">
          {props.product?.title.length >= 30
            ? props.product?.title.slice(0, 30) + "...."
            : props.product?.title}
        </span>
        <span className="productCatogary">{props.product?.category}</span>
        <span className="productPrice">₹{props.product?.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
