import React from 'react'
import { useContext } from 'react'
import './Footer.css'
import {firebaseContext} from '../../Context/FirebaseContext'
function Footer() {
  const {firebase} = useContext(firebaseContext)
  return (
    
    <div className='footerParentDiv'>
     <div className="footerContainer">

      <ul>
        <h6>Contact US</h6>
        <li><a href="">Instagram</a> </li>
        <li> <a href="">Facebook</a></li>
        <li><a href="">Twitter</a></li>
      </ul>
      <button className='logoutBtn' onClick={() =>{
                    firebase.auth().signOut();
            }}>Logout</button>
     </div>
            
            <p className='copyRight'><i class="fa-regular fa-copyright"></i>Arjun vijay-2023</p>
    </div>
   
  )
}

export default Footer
