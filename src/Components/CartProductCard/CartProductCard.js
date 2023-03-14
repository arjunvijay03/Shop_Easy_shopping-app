import React, {useContext} from "react";
import "./CartProductCard.css";
import Data from "../../Data/Data";
import {firebaseContext} from '../../Context/FirebaseContext'
import {authContext} from '../../Context/Authcontext'
import { Link } from "react-router-dom";
function CartProductCard({ cart, cartItems }) {
    const {firebase} = useContext(firebaseContext)
    const {user} = useContext(authContext)
    

    let docRef =  firebase.firestore().collection('users').doc(user?.uid)

    let product = Data.find((item) => item.id == cart.id)

    let currentCartItem = cartItems.find(element=>element.id == cart.id)
    const handleDecrease =()=>{
      
    if(currentCartItem.number == 1){
     cartItems =  cartItems.filter((element)=>element.id != currentCartItem.id)
     docRef.update({cart:cartItems})
    }else{

      currentCartItem.number -=1
      docRef.update({cart:cartItems})
    }
   
    }


    const handleIncrease =()=>{
      
    // let currentCart = cartItems.find(element=>element.id == cart.id)
    

      currentCartItem.number +=1
      docRef.update({cart:cartItems})
    }

    const handleProductRemove = ()=>{
      cartItems =  cartItems.filter((element)=>element.id != currentCartItem.id)
     docRef.update({cart:cartItems})
    }
  return (
    <div className="cartCardContainer">
      <div className="cartCardImageContainer">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="cartCardProductDetails">
        <Link to={`/productview/${product.id}`}>
        
        <span className="productName">
          {product?.title.length >= 30
            ? product?.title.slice(0, 30) + "...."
            : product?.title}
        </span>
        </Link>
        <span className="productCatogary">{product?.category}</span>
        <span className="productPrice">₹{product?.price}</span>

        <div className="buttons">
          <span onClick={handleDecrease} className="add">-</span>
          <span className="itemCount">
            {cart.number}
           
          </span>
          <span onClick={handleIncrease} className="remove">+</span>
        </div>
        <div>Total amount: <span>{product?.price * cart.number }</span></div>
      </div>
      <div onClick={handleProductRemove} className="removeProduct">X</div>
    </div>
  );
}

export default CartProductCard;
