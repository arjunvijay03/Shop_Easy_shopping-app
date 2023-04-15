import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/Authcontext";
import Data from "../../Data/Data";
import SearchproductsCard from "../Searchproductscard/SearchproductsCard";
import "./Navbar.css";
import { firebaseContext } from "../../Context/FirebaseContext";
function Navbar() {

  const navigate = useNavigate()
  const {firebase} = useContext(firebaseContext)
  const {user } = useContext(authContext)
  const Navigate = useNavigate()
  const [searchResult, setSearchResult] = useState([])
  const [query, setQuery] = useState('')


  const handleChange =(event) =>{
    setQuery(event.target.value) ;
    

    
  }
  const handleClick = (id)=>{
    setQuery('')
    navigate(`/productview/${id}`)
   
  }
  useEffect(()=>{
    let search = Data.filter((item)=> item.title.toLocaleLowerCase().includes(query?.toLocaleLowerCase()))
   setSearchResult(search)
  
  }, [query])

  return (
    <div className="navbarParentDiv">
      <header>
        <img onClick={()=>Navigate('/')} src={require("../../Logo/logo.jpg")} width="150" className="logo" />
        <div className="searchProduct">
        <form
          className="searchForm"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input  onChange={handleChange} value={query} type="text" className="searchInput" name="" id="" />
          <button type="submit" className="searchBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
       {query && <div className="searchProductsContainer">
          {searchResult?.map((product,index)=>{
            return <SearchproductsCard key={index} handleClick={handleClick} product={product}></SearchproductsCard>
          })}
        </div>}
        </div>

        {user ?  ( <div className="hamburger">
        <i className="fa-solid fa-bars"></i>
        <div className="menuContainer">
          <div className="profileContainer">
            <div className="profilePic">{user?.displayName[0].toUpperCase()}</div>
            <div className="profileDetails"><p>{user?.displayName}</p></div>
          </div>

          
          <div className="navBtns" onClick={()=>Navigate('/cart')} >
            <i className="fa-solid fa-cart-shopping"></i> <span>Cart</span>
          </div>
         

        <div className="navBtns" onClick={()=>{
          navigate('/addresses')
        }} > <i className="fa-solid fa-address-book"></i>  <span>Addresses</span></div>
        <div className="navBtns"><i className="fa-solid fa-table-list"></i>  <span>My orders</span></div>
        <div className="navBtns"  onClick={() =>{
                    firebase.auth().signOut();
            }}><i className="fa-solid fa-power-off"></i>  <span>Logout</span></div>

          
        </div>
        </div>): (
          <button className="navLoginBtn" onClick={()=>Navigate('/login')}>Login</button>
        )}

        

       
      </header>
      
     
    </div>
  );
}

export default Navbar;
