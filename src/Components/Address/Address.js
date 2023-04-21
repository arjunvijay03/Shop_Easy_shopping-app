import React, { useContext, useEffect, useState, useReducer } from 'react'
import './Address.css'
import AddressCard from './addressComponents/AddressCard'
import AddressForm from './addressComponents/AddressForm'
import {addressReducer} from '../../Reducers/AddressReducer'
import { addressContext } from '../../Context/AddressContext'


function Address() {
  const [addressFormShow, setAddressFormShow]= useState(false)
  const {address} = useContext(addressContext)
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

          return  <AddressCard singleAddress = {singleAddress} dispatch={dispatch} setAddressFormShow={setAddressFormShow} key={index}></AddressCard>
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
