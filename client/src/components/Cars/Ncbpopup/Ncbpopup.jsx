import React from 'react'
import style from "./ncb.module.css"
import close from "./Close.svg"
import axios from "axios"
import {Link} from "react-router-dom"

function Ncbpopup({ popupp, setpopupp }) {
  
  return popupp ? (
    <div className={style.ncbpopupbody}>
      <div className={style.congradiv}>
        <p>Congratulations</p>
        <img
          onClick={() => {
            setpopupp(false);
          }}
          src={close}
          alt=""
        />
      </div>
      <div className={style.ncbdiv}>Your NCB has been increased to 20%</div>
      <div>
        <Link to="/plans" >
       
          <button onClick={async () => {
            const id = localStorage.getItem("ackoid");
            const data = {
              ncb:20
            }
            // await axios.patch(`http://localhost:8080/cars/${id}`, data);
               await axios.patch(`https://acko.herokuapp.com/${id}`, data);
          }} className={style.popupbtn}>Continue</button>
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Ncbpopup
