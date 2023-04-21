import "./App.css";
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";

import ProductViewPage from "./Pages/ProductViewPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ViewMore from "./Pages/ViewMore";
import Cartpage, {} from './Pages/Cartpage'
import { useContext, useEffect } from "react";
import { authContext } from "./Context/Authcontext";
import { firebaseContext } from "./Context/FirebaseContext";
import AddressPage from "./Pages/AddressPage";
import ConfirmOrderPage from "./Pages/ConfirmOrderPage";




function App() {
  // const {setUser} = useContext(authContext)
  // const {firebase} = useContext(firebaseContext)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route excat path="/" element={<Home/>}/>
          <Route  path="/signup" element={<SignupPage/>}/>
          <Route  path="/login" element={<LoginPage/>}/>
          <Route  path="/productview/:productId" element={<ProductViewPage/>}/>
          <Route  path="/viewmore/:category" element={<ViewMore/>}/>
          <Route  path="/cart" element={<Cartpage/>}/>
          <Route  path="/addresses" element={<AddressPage/>}/>
          <Route  path="/confirm_order" element={<ConfirmOrderPage/>}/>

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
