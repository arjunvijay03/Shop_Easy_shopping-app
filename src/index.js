import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { firebaseContext } from "./Context/FirebaseContext";
import firebase from "./Config/FirebaseConfig";
import Authcontext from "./Context/Authcontext";
import { CartContext } from "./Context/cartContext";
import AddressContext from "./Context/AddressContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <firebaseContext.Provider value={firebase}>
      <Authcontext>
        <CartContext>
          <AddressContext>
            <App />
          </AddressContext>
        </CartContext>
      </Authcontext>
    </firebaseContext.Provider>
  </React.StrictMode>
);
