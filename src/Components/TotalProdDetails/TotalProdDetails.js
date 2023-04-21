import React, { useContext } from 'react'
import './TotalProdDetails.css'
import Data from '../../Data/Data'
import { authContext } from '../../Context/Authcontext'
import { firebaseContext } from '../../Context/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
function TotalProdDetails({items}) {
    const {user} = useContext(authContext);
    const {firebase} = useContext(firebaseContext)
    const {cartItems} = useContext(cartContext)
    const Navigate = useNavigate()
    let docRef =  firebase.firestore().collection('users')
    const handleClearCart = ()=>{
        docRef.doc(user?.uid).update({
          cart:[]
        })
      }
  return (
    <div className="cartDetails">
        <span className='cartDetailsTitle'>PRICE DETAILS</span>
          <p>Total number of products : <span>{items?.map((element)=>element.number).reduce((x, y) => x + y, 0)}</span> </p>
          <p>Total amount : <span>₹ {items?.map((element)=>{
              let search = Data.find((x)=>x.id == element.id)
              return element.number*search.price
          }).reduce((x, y) => x + y, 0)}</span> </p>

          <div className="cartDetailsButtons">
            <button onClick={handleClearCart} className='cleatCartBtn'> clear cart</button>
            <button onClick={()=>{Navigate('/confirm_order',{state:{product:items}})}} className='checkOutBtn'>Check out</button>
          </div>

        </div>
  )
}

export default TotalProdDetails
