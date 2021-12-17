import React, { useState } from 'react'
import style from "./pincode.module.css"
import navigation from "./Navigation.svg"
import axios from "axios"
import { Link } from 'react-router-dom'

function Pincode() {

const [pincode,setPincode]=useState("")

    return (
      <div className={style.pincodebody}>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        >
          Where do you stay?
        </div>
        <input
          onChange={(e) => {
            setPincode(e.target.value);
          }}
          className={style.pininput}
          placeholder="560065"
        />
        <p
          style={{
            fontSize: "10px",
            lineHeight: "20px",
            fontWeight: "normal",
            color: "black",
          }}
        >
          Please enter the pincode where your vehicle is currently located
        </p>
        <Link to="/cars/carnumber" >
          <div>
            <button
              onClick={async () => {
                const id = localStorage.getItem("ackoid");
                const data = { pincode: pincode };
                await axios.patch(`http://localhost:8080/cars/${id}`, data);
              }}
              className={style.pinbtn}
            >
              Continue
            </button>
          </div>
        </Link>

        <div className={style.pindivflex}>
          <img src={navigation} alt="" />
          <p
            style={{
              fontWeight: "normal",
              fontSize: "10px",
              alignItems: "center",
              fontStyle: "normal",
              width: "230px",
            }}
          >
            Your pincode helps us check our service availability in your region
          </p>
        </div>
      </div>
    );
}

export default Pincode
