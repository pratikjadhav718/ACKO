import React from 'react'
import style from "./paysuccessfull.module.css"
import Header from "../Header/Header"
import pay from "./paymentgif.png"

function Paysuccessfull() {
    return (
        <div>
            <Header></Header>
            <img src={pay} alt='' />
            <button onClick={() => {
                localStorage.removeItem("ackoid");
                localStorage.removeItem("ackoid");
            }} >Continue</button>
        </div>
    )
}

export default Paysuccessfull
