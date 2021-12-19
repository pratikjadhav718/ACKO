import React from 'react'
import style from "./paysuccessfull.module.css"
import Header from "../Header/Header"
import {Link, useHistory} from "react-router-dom"

function Paysuccessfull() {

const history=useHistory()

    return (
      <div>
        <Header></Header>
     
        <div
          style={{
            alignItems: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className={style.payimgg}
            src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif"
            alt=""
          />
        </div>
        <div
          style={{
            alignItems: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => {
              localStorage.removeItem("ackoid");
              localStorage.removeItem("ackoUserId");
              history.push("/");
            }}
            className={style.paybtn}
          >
            Continue
          </button>
        </div>
      </div>
    );
}

export default Paysuccessfull
