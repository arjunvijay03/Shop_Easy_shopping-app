import React, { useContext, useState } from 'react'
import { firebaseContext } from '../../Context/FirebaseContext';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(firebaseContext)
  const Navigate = useNavigate()
  const handleSubmit = (event)=>{
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      Navigate('/')
    }).catch((error)=>{
      alert(error)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
      <div className="signupContainer">
        <div className="signupRightWrapper">
          <img src={require("../../Logo/logo.jpg")} alt='logo' />
          <p>"Get ready to discover a whole new world of shopping"</p>
        </div>
        <div className=" signupFormContainer">
          <h3>Login</h3>
          <form action="" className="signupForm">
           
            <input onChange={event=>setEmail(event.target.value)} type="email" name="" id="signupEmail" placeholder="Email" />
            <input onChange={event=>setPassword(event.target.value)} type="password" name="" id="signupPass" placeholder="Password" />
            
            <button onClick={handleSubmit} type="submit" className="signupBtn">Sign up</button>
           <Link to={'/signup'}> <p>don't have an account ?</p></Link>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
