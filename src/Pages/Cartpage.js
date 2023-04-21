import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Nav bar/Navbar'
import {firebaseContext} from '../Context/FirebaseContext'
import {authContext} from '../Context/Authcontext'
import Data from '../Data/Data'
import CartProductCard from '../Components/CartProductCard/CartProductCard'
import {cartContext} from '../Context/cartContext'
import { Link } from 'react-router-dom'
import TotalProdDetails from '../Components/TotalProdDetails/TotalProdDetails'
function Cartpage() {
    const {cartItems} = useContext(cartContext) 
    const {firebase} = useContext(firebaseContext)
    const {user} = useContext(authContext)


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);











    let docRef =  firebase.firestore().collection('users').doc(user?.uid)

    

    const handleDecrease =(id)=>{
    let currentCartItem = cartItems.find(element=>element.id == id);
      
        if(currentCartItem.number == 1){
        let newCartItems =  cartItems.filter((element)=>element.id != currentCartItem.id)
        docRef.update({cart:newCartItems})
        }else{

          currentCartItem.number -=1
          docRef.update({cart:cartItems})
        }
   
    }


    const handleIncrease =(id)=>{
    let currentCartItem = cartItems.find(element=>element.id == id);
      
    // let currentCart = cartItems.find(element=>element.id == id)
    

      currentCartItem.number +=1
      docRef.update({cart:cartItems})
    }

    const handleProductRemove = (id)=>{
    let currentCartItem = cartItems.find(element=>element.id == id);

     let newCartItems =  cartItems.filter((element)=>element.id != currentCartItem.id)
     docRef.update({cart:newCartItems})
    }













   
    

  return (
    <div className='cartPageParentDiv'>
        <Navbar></Navbar>
        <div className="cartProductsContainer">

        { cartItems&&
          cartItems[0]?
           
        cartItems?.map((products, index)=>{
                
                return  <CartProductCard  key={index} cartItems={cartItems} handleDecrease={handleDecrease} handleIncrease={handleIncrease} handleProductRemove={handleProductRemove}  cart = {products}></CartProductCard>
        }): <div className='cartEmptyContainer'>
          <i className="fa-solid fa-cart-arrow-down"></i>
          <p className='cartEmpty'>Cart is empty</p>
          <Link to={'/'}><button className='toHomeBtn'>Go back to home</button></Link>
          
          </div>
      }
        </div>
       {(cartItems && cartItems[0]) && <TotalProdDetails items={cartItems}></TotalProdDetails>}

        {/* <div className="cartDetails">
          <p>Total number of products : <span>{cartItems?.map((element)=>element.number).reduce((x, y) => x + y, 0)}</span> </p>
          <p>Total amount : <span>₹ {cartItems?.map((element)=>{
              let search = Data.find((x)=>x.id == element.id)
              return element.number*search.price
          }).reduce((x, y) => x + y, 0)}</span> </p>

          <div className="cartDetailsButtons">
            <button onClick={handleClearCart} className='cleatCartBtn'> clear cart</button>
            <button className='checkOutBtn'>Check out</button>
          </div>

        </div> */}
    </div>
  )
}

export default Cartpage
