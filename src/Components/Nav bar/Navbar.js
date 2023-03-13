import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/Authcontext";

import "./Navbar.css";
function Navbar() {
  const {user } = useContext(authContext)
  const Navigate = useNavigate()
  return (
    <div className="navbarParentDiv">
      <header>
        <img onClick={()=>Navigate('/')} src={require("../../Logo/logo.jpg")} width="150" />

        <form
          className="searchForm"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" name="" id="" />
          <button type="submit" className="searchBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {user != null ? (
          <div className="homeCartBtn" onClick={()=>Navigate('/cart')} >
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        ) : (
          <button className="homeLoginBtn" onClick={()=>Navigate('/login')}>Login</button>
        )}
      </header>
    </div>
  );
}

export default Navbar;
