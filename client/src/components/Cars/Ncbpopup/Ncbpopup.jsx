import React from 'react'
import style from "./ncb.module.css"
import close from "./Close.svg"

function Ncbpopup({ popupp, setpopupp }) {
  console.log(popupp);
  return(popupp) ? (
    <div className={style.ncbpopupbody}>
      <div className={style.congradiv}>
        <p>Congratulations</p>
        <img onClick={() => {
          setpopupp(false)
        }}  src={close} alt="" />
      </div>
      <div className={style.ncbdiv}>Your NCB has been increased to 20%</div>
      <div>
        <button className={style.popupbtn}>Continue</button>
      </div>
    </div>
  ):""
}

export default Ncbpopup
