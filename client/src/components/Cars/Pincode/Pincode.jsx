import React from 'react'
import style from "./pincode.module.css"
import navigation from "./Navigation.svg"

function Pincode() {
    return (
        <div className={style.pincodebody} >
            <div style={{fontStyle:"normal",fontWeight:"700",fontSize:"20px",lineHeight:"28px"}} >Where do you stay?</div>
            <input className={style.pininput} placeholder='560065' />
            <p style={{fontSize:"8px",lineHeight:"20px",fontWeight:"normal",color:"black"}} >Please enter the pincode where your vehicle is currently located</p>
            <div><button className={style.pinbtn} >Continue</button></div>
            
            <div className={style.pindivflex} >
                <img src={navigation} alt='' />
                <p style={{fontWeight:"normal",fontSize:"10px",alignItems:"center",fontStyle:"normal",width:"230px"}} >Your pincode helps us check our service availability in your region</p>
            </div>
        </div>
    )
}

export default Pincode
