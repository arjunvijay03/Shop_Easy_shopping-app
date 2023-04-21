import React, { useContext, useState } from 'react'
import './ConfirmOrder.css'
import AddressCard from '../Address/addressComponents/AddressCard';
import { addressContext } from '../../Context/AddressContext';
import { useLocation, useNavigate } from 'react-router-dom';
import CartProductCard from '../CartProductCard/CartProductCard';
import Data from '../../Data/Data';
import PaymentOption from './COcomponents/PaymentOption';
import { firebaseContext } from '../../Context/FirebaseContext';
import { authContext } from '../../Context/Authcontext';
import OrderPlaced from './COcomponents/OrderPlaced';
function ConfirmOrder() {
    const location = useLocation()
    const {firebase} = useContext(firebaseContext)
    const {user} = useContext(authContext)
    const [orders, setOrders] = useState(location.state.product)
    const [active, setActive] = useState('address')
    const {address, defaultAddressId} = useContext(addressContext)
    const Navigate = useNavigate()
    const [orderComplete, setOrderComplete] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState(null)
    let singleAddress = address?.find((element)=>element.id === defaultAddressId)
    let paymentOptions = ['UPI', 'Wallets', 'Credit/Debit/ATM Card', 'Cash on delivery' ]
    
    const handleOrderConfirm = ()=>{
      let orderdProducts = orders.map(element=>({...element, date:Date(), paymentMethod, status:'Orderd'}))
      firebase.firestore().collection('orders').doc(user.uid).update({
        orders : firebase.firestore.FieldValue.arrayUnion(...orderdProducts)
      })
      setOrderComplete(true)
    }
    
    const handleIncrease = (cartId)=>{
      setOrders(prev=>prev.map((element)=>element.id === cartId ?{...element, number:element.number + 1 }: element))
    }
    const handleDecrease = (cartId)=>{
      setOrders(prev=>prev.map((element)=>{
        
          return element.id === cartId && element.number !== 1 ?{...element, number:element.number - 1} : element
        
        }))
    }

  return (
    <div className='addressContainer confirmOrderContainer'>
      <div className={`coStepCont ${active === 'address' && 'coStepActive'}`}>
        <div className="coStepTitle"> <div>1</div> ADDRESS</div>
        <div className="coStepContent">
           { singleAddress ? <AddressCard confirmOrder={true} singleAddress={singleAddress} setActive={setActive}></AddressCard> : 
             <button onClick={()=>Navigate('/addresses')} className='adccoButton' style={{marginBottom:'10px'}}>Manage Address</button> //class in addresscart file
            }
        </div>
      </div>
      <div className={`coStepCont ${active === 'summary' && 'coStepActive'}`}>
        <div className="coStepTitle"> <div>2</div> ORDER SUMMARY</div>
        <div className="coStepContent">
            {
             orders[0] && orders.map((element, index)=>{
                return <CartProductCard key={index} forOrderConfirm = {true} cart={element} handleDecrease={handleDecrease} handleIncrease={handleIncrease} ></CartProductCard>
              }) 
            }
            <div className="coSummaryDetails">
              <p>Total Amount : {orders?.map((element)=>{
              let search = Data.find((x)=>x.id == element.id)
              return element.number*search.price
          }).reduce((x, y) => x + y, 0)} </p>
          <button onClick={()=>setActive('payment')} className='adccoButton'>CONTINUE</button>
            </div>
            
        </div>
      </div>
      <div className={`coStepCont ${active === 'payment' && 'coStepActive'}`}>
        <div className="coStepTitle"> <div>3</div> PAYMENT OPTION</div>
        <div className="coStepContent">
            <div className="coPaymentOptions">
            { paymentOptions.map((option, index)=><PaymentOption key={index} option={option} setPaymentMethod={setPaymentMethod}></PaymentOption>)
            }
            <div className="copBtns">
              <button disabled = {paymentMethod===null?true:false} onClick={handleOrderConfirm} className="adccoButton">Confirm Order</button>
            </div>
            </div>
            
        </div>
      </div>
     { orderComplete && <OrderPlaced></OrderPlaced>}
    </div>
  )
}

export default ConfirmOrder
