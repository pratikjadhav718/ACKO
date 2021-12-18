import React from 'react'
import style from "./paysuccessfull.module.css"
import Header from "../Header/Header"
import pay from "./paymentgif.png"

function Paysuccessfull() {
    return (
        <div>
            <Header></Header>
            <img className={style.payimgg} src={pay} alt='' />
            <button onClick={() => {
                localStorage.removeItem("ackoid");
                localStorage.removeItem("ackoUserId");
            }} className={style.paybtn} >Continue</button>
        </div>
    )
}

export default Paysuccessfull
