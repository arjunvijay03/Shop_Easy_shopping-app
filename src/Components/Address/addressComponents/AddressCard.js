import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import './AddressCard.css'
import { authContext } from '../../../Context/Authcontext';
import { firebaseContext } from '../../../Context/FirebaseContext';
import { addressContext } from '../../../Context/AddressContext';
function AddressCard({singleAddress, setAddressFormShow, dispatch, confirmOrder, setActive}) {
  const {firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)
  const {address, defaultAddressId} = useContext(addressContext)
  const navigate = useNavigate()
  
  return (
    <div className='addressCardContainer'>
        {!confirmOrder && <input type="radio" checked={defaultAddressId === singleAddress?.id} name='addressRadio' className='adcRadio' onChange={(event)=>{
          
          firebase.firestore().collection('users').doc(user.uid).update({
            defaultAddressId : singleAddress.id
          })
        }} />}
        <div className="addressType">
            {singleAddress?.type.toUpperCase()}
        </div>
        <div className="adCardNamePh">
            <span className="adcName">{singleAddress?.name}</span>
            <span className="adcPhone">{singleAddress?.phone}</span>
        </div>
        <span className="adcAddress">
            {singleAddress?.address}
        </span>

       {!confirmOrder && <div className="adcElepsis">
          <i style={{float:'right'}} className="fa-solid fa-ellipsis-vertical"></i>
        <div className="adcOptions">
            <div onClick={()=>{
              setAddressFormShow(true);
              dispatch({type:'updateAll', payload:singleAddress})
            }}>Edit</div>
            <div onClick={()=>{
               let newAddress = address.filter((element)=>element.id != singleAddress.id)
              firebase.firestore().collection('users').doc(user.uid).update({
                address:newAddress
              })
            }}>Delete</div>
          </div>
        </div>}
       { confirmOrder && <div className='adccoBtns'> 
                <button onClick={()=>{
                navigate('/addresses')
              }} className='adccoButton'>EDIT</button>
                <button onClick={()=>{
                  setActive('summary')
                }}  className='adccoButton'>DELIVER HERE</button>
       </div>}
      
    </div>
  )
}

export default AddressCard
