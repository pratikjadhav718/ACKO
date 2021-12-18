import React from 'react'
import style from "./paysuccessfull.module.css"
import Header from "../Header/Header"
import {Link} from "react-router-dom"

function Paysuccessfull() {
    return (
      <div>
        <Header></Header>
        <div>
          <img
            className={style.payimgg}
            src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif"
            alt=""
          />
        </div>
        <div style={{alignItems:"center",marginLeft:"50rem"}} >
          <Link to="/">
            <button
              onClick={() => {
                localStorage.removeItem("ackoid");
                localStorage.removeItem("ackoUserId");
              }}
              className={style.paybtn}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    );
}

export default Paysuccessfull
