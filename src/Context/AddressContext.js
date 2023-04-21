import React, { createContext, useContext, useEffect, useState } from 'react'
import { authContext } from './Authcontext'
import { firebaseContext } from './FirebaseContext'


export  const addressContext = createContext(null)

function AddressContext({children}) {
    const [address, setAddress] = useState([])
    const [defaultAddressId, setDefaultAddressId] = useState('')
    const {user} = useContext(authContext)
    const {firebase} = useContext(firebaseContext)
    useEffect(()=>{
        firebase.firestore().collection('users').doc(user?.uid).onSnapshot((doc) => {
            setAddress(doc.data()?.address)
            setDefaultAddressId(doc.data()?.defaultAddressId)
       });
    },[user])
  return (
    <addressContext.Provider value={{address, defaultAddressId}}>
        {children}
    </addressContext.Provider>
  )
}

export default AddressContext
