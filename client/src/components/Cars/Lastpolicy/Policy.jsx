import React from 'react'
import style from "./policy.module.css"
import thumbsup from "./thumbsup paper.svg"
import { Link } from "react-router-dom"
import axios from "axios"

function Policy({ setpopupp }) {
  return (
    <div className={style.policybody}>
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "bolder",
          fontSize: "18px",
          lineHeight: "22px",
          width: "300px",
        }}
      >
        Did you make a claim in last policy period?
      </div>
      <div style={{ marginTop: "40px" }}>
        <Link to="/plans" >
      
          <button onClick={async () => {
            const id = localStorage.getItem("ackoid");
            const data = {
              ncb:0
            }
            // await axios.patch(`http://localhost:8080/cars/${id}`, data);
             await axios.patch(`https://acko.herokuapp.com/cars/${id}`, data);
          }} >Yes</button>
        </Link>
      <button
          onClick={() => {
            setpopupp(true);
          }}
          style={{ marginLeft: "20px" }}
        >
          No
        </button>
      </div>
      <div className={style.policyflexdiv}>
        <img src={thumbsup} alt="" />
        <p>You can get amzing discounts basis your claim history</p>
      </div>
    </div>
  );
}

export default Policy
