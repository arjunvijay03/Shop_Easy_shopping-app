import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../../Data/Data";
import "./ProductView.css";
import {firebaseContext} from '../../Context/FirebaseContext'
import { useContext } from "react";
import {authContext} from '../../Context/Authcontext'
import { cartContext } from "../../Context/cartContext";
function ProductView() {
  const { productId } = useParams();
  const {firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)
  const product = Data.find((element) => element.id == productId);
  const [largImage, setLargeImage] = useState(product.images[0]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate()
  const {cartItems} = useContext(cartContext)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

    // ---------------------------CART UPDATE-------------------------------
    let docRef =  firebase.firestore().collection('users')


  
let currentProduct = cartItems?.find(item=>item.id == productId)

  const imgChange = (event) => {
    setLargeImage(event.target.src);
  };



  





  const  handleAddCart = ()=>{

   if(currentProduct == undefined){
 
     docRef.doc(user?.uid).update({
      cart: firebase.firestore.FieldValue.arrayUnion({
        id:productId,
        number:1
  })
  })
   }else{
    Navigate('/cart')
  
   }
  }

  return (
    <div className="productViewParentDiv">
      <div className="productViewContainer">
        <div className="productViewImages">
          <div className="largeImageContainer">
            <img src={largImage} alt="" className="largeImage" />
          </div>
          <div className="smallImages">
            {product.images.map((image, index) => {
              return (
                <div className="smallImage" key={index}>
                  <img
                    onMouseEnter={imgChange}
                    onClick={imgChange}
                    src={image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="productViewDetails">
          <div className="detailsContainer">
            <h3>{product.title}</h3>
            <span className="productViewCategory">{product.category}</span>

            <div className="productRating">
              {product.rating} <i className="fa-solid fa-star"></i>
            </div>

            <h3>₹ {product.price}</h3>
            {product.stock < 15 && (
              <span className="productLeft">
                Hurry, only {product.stock} left!
              </span>
            )}
            <span className="productViewDes">{product.description}</span>
            <div className="cartBuyBtn">
              <button className= {` ${currentProduct == undefined?'addToCart':'alreadyInCart  '}`} onClick={()=>{
                user? handleAddCart() : Navigate('/login')
                }}>{currentProduct == undefined? 'Add to cart': 'Go to cart'}</button>
              <button className="buyNow"> Buy now</button>
            </div>
          </div>
        </div>

      </div>
        {loading && (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        )}
    </div>
  );
}

export default ProductView;
