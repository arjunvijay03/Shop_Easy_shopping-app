import React from "react";
import Data from "../../Data/Data";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";
function FeaturedProducts() {
  let featuredProductsId = [82, 75, 66, 61, 56, 26, 14, 8, 9, 10];
  return (
    <div className="featureProductsParentDiv">
    <h3>Featured</h3>
      <div className="featuredProductsContainer">
        {featuredProductsId.map((id) => {
          let product = Data.find((element) => element.id == id);
          return <ProductCard product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
