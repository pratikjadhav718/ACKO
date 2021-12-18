import React, { useState } from 'react'
import style from "./dynamic.module.css"
import axios from "axios"
import buttonpen from "./Button pen.svg"
import calender from "./Cal.svg"
import car from "./car.svg"
import date from "./Date.svg"
import location from "./Location.svg"

function Dynamic() {

    const id = localStorage.getItem("ackoid");

    const [data,setData]=useState("")


    const getData =async () => {
        await axios.get()
    }

    return (
        <div className={style.dynamicbody} >
            
        </div>
    )
}

export default Dynamic
