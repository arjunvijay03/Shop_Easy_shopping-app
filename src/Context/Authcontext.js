import { createContext, useState,useEffect, useContext } from "react";
import {firebaseContext} from './FirebaseContext'



export const authContext = createContext(null)



export default function Authcontext ({children}){
    const {firebase} = useContext(firebaseContext)
    const [user, setUser] = useState()
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
          setUser(user);
        })
      },[])
    return( 
    <authContext.Provider value={{user,setUser}}>
        {children}
    </authContext.Provider>
    )
}