import React from 'react'
import style from "./pincode.module.css"

function Pincode() {
    return (
        <div className={style.pincodebody} >
            <div style={{fontStyle:"normal",fontWeight:"700",fontSize:"20px",lineHeight:"28px"}} >Where do you stay?</div>
            <input className={style.pininput} placeholder='56005' />
            <p style={{fontSize:"9px",lineHeight:"20px",fontWeight:"normal",letterSpacing:"0.5px"}} >Please enter the pincode where your vehicle is currently located</p>
      <div><button className={style.pinbtn} >Continue</button></div>
        </div>
    )
}

export default Pincode
