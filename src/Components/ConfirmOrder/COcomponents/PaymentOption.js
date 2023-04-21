import React from 'react'
import './Components.css'
function PaymentOption({option, setPaymentMethod}) {
  return (
    <label for={option} className='paymentOptions'>
      <input  type="radio" onChange={(event)=>setPaymentMethod(event.target.value)} name="paymentoptions" value={option} id={option} />
      <p>{option}</p>
    </label>
  )
}

export default PaymentOption
