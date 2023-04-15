import React, { useContext } from 'react'
import './AddressCard.css'
import { authContext } from '../../../Context/Authcontext';
import { firebaseContext } from '../../../Context/FirebaseContext';
function AddressCard({singleAddress, address, setAddressFormShow, dispatch}) {
  const {firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)
  
  return (
    <div className='addressCardContainer'>
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

        <div className="adcElepsis">
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
        </div>
      
    </div>
  )
}

export default AddressCard
