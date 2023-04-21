import React, { useContext, useReducer, useState } from "react";
import "./AddressForm.css";
import { firebaseContext } from "../../../Context/FirebaseContext";
import { authContext } from "../../../Context/Authcontext";
import { arrayUnion } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function AddressForm({ setAddressFormShow, addressData, dispatch, address }) {
  const { firebase } = useContext(firebaseContext);
  const { user } = useContext(authContext);

  const [errors, setErrors] = useState([]);
  let error = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!addressData.name) {
      error = [...error, "name"];
    }
    if (addressData.phone.length < 10) {
      error = [...error, "phone"];
    }
    if (addressData.altNumber) {
      if (addressData.altNumber.length < 10) {
        error = [...error, "altNumber"];
      }
    }
    if (!addressData.pinCode) {
      error = [...error, "pincode"];
    }
    if (!addressData.locality) {
      error = [...error, "locality"];
    }
    if (!addressData.address) {
      error = [...error, "address"];
    }
    if (!addressData.city) {
      error = [...error, "city"];
    }
    if (!addressData.stateName) {
      error = [...error, "statename"];
    }
    if (!addressData.type) {
      error = [...error, "type"];
    }
    setErrors(error);
    if (!error[0]) {
      if (!addressData.id) {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .update({
            address: arrayUnion({
              ...addressData,
              id: uuidv4(),
            }),
          });
      } else {
        let newAddress = address.map((element) => {
          return element.id === addressData.id ? addressData : element;
        });
        firebase.firestore().collection("users").doc(user.uid).update({
          address: newAddress,
        });
      }

      setAddressFormShow(false);
      dispatch({ type: "clearAll" });
    }
  };
  return (
    <div className="addressFormContainer">
      <div className="adfWrapper">
        <h4>ADD A NEW ADDRESS</h4>
        <form action="" onSubmit={handleSubmit} className="addressForm">
          <input
            onChange={(event) =>
              dispatch({ type: "changeName", payload: event })
            }
            className={`${errors.includes("name") && "invalid"}`}
            type="text"
            value={addressData.name}
            placeholder="Name"
          />
          <input
            onChange={(event) => {
              if (/[a-z]/gi.test(event.target.value)) return;
              dispatch({ type: "changePhone", payload: event });
            }}
            className={`${errors.includes("phone") && "invalid"}`}
            type="text"
            value={addressData.phone}
            placeholder="Phone number"
          />
          <input
            onChange={(event) => {
              if (/[a-z]/gi.test(event.target.value)) return;
              dispatch({ type: "changePinCode", payload: event });
            }}
            className={`${errors.includes("pincode") && "invalid"}`}
            type="text"
            name=""
            id=""
            value={addressData.pinCode}
            placeholder="Pin code"
          />
          <input
            onChange={(event) =>
              dispatch({ type: "changeLocality", payload: event })
            }
            className={`${errors.includes("locality") && "invalid"}`}
            type="text"
            value={addressData.locality}
            placeholder="Locality"
          />
          <textarea
            onChange={(event) =>
              dispatch({ type: "changeAddress", payload: event })
            }
            className={`${errors.includes("address") && "invalid"}`}
            cols="30"
            rows="10"
            value={addressData.address}
            placeholder="Address"
          ></textarea>
          <input
            onChange={(event) =>
              dispatch({ type: "changeCity", payload: event })
            }
            className={`${errors.includes("city") && "invalid"}`}
            type="text"
            value={addressData.city}
            placeholder="City"
          />
          <input
            onChange={(event) =>
              dispatch({ type: "changeStateName", payload: event })
            }
            className={`${errors.includes("statename") && "invalid"}`}
            value={addressData.stateName}
            type="text"
            placeholder="State"
          />
          <input
            onChange={(event) =>
              dispatch({ type: "changeLandmark", payload: event })
            }
            type="text"
            value={addressData.landmark}
            placeholder="Landmark (optional)"
          />
          <input
            onChange={(event) => {
              if (/[a-z]/gi.test(event.target.value)) return;
              dispatch({ type: "changeAltNumber", payload: event });
            }}
            type="text"
            value={addressData.altNumber}
            className={`${errors.includes("altNumber") && "invalid"}`}
            placeholder="Alternative number (optional)"
          />
          <div className="adfType">
            <p className={`${errors.includes("type") && "invalidText"}`}>
              Address Type
            </p>
            <div>
              <input
                onChange={(event) =>
                  dispatch({ type: "changeType", payload: event })
                }
                type="radio"
                checked={addressData.type === "Home"}
                value={"Home"}
                name="adType"
              />{" "}
              <span>Home</span>
            </div>
            <div>
              <input
                onChange={(event) =>
                  dispatch({ type: "changeType", payload: event })
                }
                type="radio"
                checked={addressData.type === "Work"}
                value={"Work"}
                name="adType"
              />{" "}
              <span>Work</span>
            </div>
          </div>
          {errors[0] && <p className="adfErrorMsg">Complete all fields</p>}
          <div className="adfButtons buttons">
            <button type="submit" className="button">
              Save
            </button>
            <p
              onClick={() => {
                dispatch({ type: "clearAll" });
                setAddressFormShow(false);
              }}
            >
              Cancel
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
