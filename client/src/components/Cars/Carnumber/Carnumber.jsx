import React, { useState } from 'react'
import style from "./carnumber.module.css"
import axios from "axios"
import {Link} from "react-router-dom"

function Carnumber() {

const [number,setNumber]=useState("")

    return (
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        >
          Enter your car number{" "}
        </div>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "12px",
          }}
        >
          This makes your purchase twice as fast
        </p>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className={style.pininput}
          placeholder="TN74AQ5553"
        />
        <Link to="/cars/year" >
         
          <div style={{ marginTop: "15px" }}>
            <button
              onClick={async () => {
                const id = localStorage.getItem("ackoid");
                const data = { number: number };
                await axios.patch(`http://localhost:8080/cars/${id}`,data);
              }}
              className={style.pinbtn}
            >
              Continue
            </button>
          </div>
        </Link>
      </div>
    );
}

export default Carnumber
