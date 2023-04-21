import React, { useContext, useReducer } from "react";
import "./Signup.css";
import {firebaseContext} from '../../Context/FirebaseContext'
import {signupDataReducer}  from "../../Reducers/SignupReducer";
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
  const [signupData, dispatch] = useReducer(signupDataReducer, {
    name:'',
    email:'',
    password:''
  })

  const {firebase} = useContext(firebaseContext)
 const Navigate = useNavigate()
  const handleSubmit = (event)=>{
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(signupData.email, signupData.password)
    .then((result)=>{
      result.user.updateProfile({displayName:signupData.name})
      firebase.firestore().collection('users').doc(result.user.uid).set({
        id:result.user.uid,
        name:signupData.name,
        cart:[]
      })
      firebase.firestore().collection('orders').doc(result.user.uid).set({
        orders:[]
      })

    }).then(()=>Navigate('/'))
  }


  return (
    <div className="signupParentDiv">
      <div className="signupContainer">
        <div className="signupRightWrapper">
          <img src={require("../../Logo/logo.jpg")} />
          <p>"Get ready to discover a whole new world of shopping"</p>
        </div>
        <div className=" signupFormContainer">
          <h3>Signup</h3>
          <form action="" className="signupForm">
            <input type="text" onChange={(event)=>dispatch({type:'changeName', payload:event})} name="" id="signupName" placeholder="Name" />
            <input type="email" onChange={(event) => dispatch({type: 'changeEmail', payload:event})} name="" id="signupEmail" placeholder="Email" />
            <input type="password"  onChange={(event) => dispatch({type: 'changePassword', payload:event})}  name="" id="signupPass" placeholder="Password" />
            
            <button type="submit" onClick={handleSubmit} className="signupBtn">Sign up</button>
            <Link to={'/login'}> <p>already have an account ?</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
