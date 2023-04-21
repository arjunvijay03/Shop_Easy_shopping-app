import React from 'react'
import './Components.css'
import JSConfetti from 'js-confetti'
import { Video } from '@giphy/react-components'
import icon from '../../../Images/success-icon.png'
import {useNavigate} from 'react-router-dom'
function OrderPlaced() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    const Navigate = useNavigate()
  return (
    <div className='orderPlacedContainer'>
      <div className="opWrapper">
     <img src={icon} width={100}
     height={100}
     alt="" />
            <h4>Order Placed</h4>
            <span>Thanks for shopping with us</span>
            <button onClick={()=>Navigate('/')} className='adccoButton'>Continue Shopping</button>   
      </div>
    </div>
  )
}

export default OrderPlaced
