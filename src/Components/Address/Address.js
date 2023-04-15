import React, { useContext, useEffect, useState, useReducer } from 'react'
import './Address.css'
import AddressCard from './addressComponents/AddressCard'
import AddressForm from './addressComponents/AddressForm'
import { firebaseContext } from '../../Context/FirebaseContext'
import { authContext } from '../../Context/Authcontext' 
import {addressReducer} from '../../Reducers/AddressReducer'


function Address() {
  const [addressFormShow, setAddressFormShow]= useState(false)
  const {firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)
  const [address, setAddress] = useState()
  const [addressData, dispatch] = useReducer(addressReducer, {
    id:'',
    name:'',
    phone:'',
    pinCode:'',
    locality:'',
    address:'',
    city:'',
    stateName:'',
    landmark:'',
    altNumber:'',
    type:''

  });
  useEffect(()=>{
    firebase.firestore().collection('users').doc(user?.uid).onSnapshot((doc) => {
       setAddress(doc.data()?.address)
  });
  }, [user])
  return (
    <>
        <div className=" addressContainer">
         <h4 className='manageAddressTitle'>Manage Addresses</h4>
         <div className="addNewAddress" onClick={()=>{
          setAddressFormShow(true)
         }}>
          + ADD NEW ADDRESS
         </div>
         <div className="addressWapper">
          {address?.map((singleAddress, index)=>{

          return  <AddressCard address={address} singleAddress = {singleAddress} dispatch={dispatch} setAddressFormShow={setAddressFormShow} key={index}></AddressCard>
          })
          }
         </div>

        </div>
        {
        addressFormShow && <AddressForm setAddressFormShow={setAddressFormShow} dispatch={dispatch} addressData={addressData} address={address}></AddressForm>
        }
    
      
    </>
  )
}

export default Address
