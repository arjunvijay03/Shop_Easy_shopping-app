import { createContext, useContext, useEffect, useState } from "react";
import {firebaseContext} from './FirebaseContext'
import {authContext} from './Authcontext'
export const cartContext = createContext()

export const CartContext = ({children})=>{
    
    const {firebase} = useContext(firebaseContext)
    const {user} = useContext(authContext)
    let docRef =  firebase.firestore().collection('users')

    useEffect(() => {
     
      const unsubscribe = docRef.doc(user?.uid).onSnapshot((doc) => {
        doc.exists && setCartItems(doc.data().cart);
        
      });
    
      return () => {
        unsubscribe(); 
      };
    }, [user]);
    const [cartItems, setCartItems] = useState()
    return (<cartContext.Provider value={{cartItems}} >
                {children}
            </cartContext.Provider>)
}