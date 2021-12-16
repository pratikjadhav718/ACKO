import React from 'react'
import style from "./cartype.module.css"
import car from "./Personel car.svg"
import petrol from "./petrol.svg"
import gear from "./gear.svg"
import downarrow from "./Down arrow.svg"
function Cartype() {
    return (
      <div className={style.cartypebody}>
        <div className={style.cartypehead} >Which Car do you drive?</div>
        <div className={style.cartypeflex}>
          <img src={car} alt="" />
          <p>Ford Ecosport</p>
          <img src={downarrow} alt="" />
        </div>
        <hr />
        <div className={style.cartypeflex}>
          <img src={petrol} alt="" />
          <p>Ford Ecosport</p>
          <img src={downarrow} alt="" />
        </div>
        <hr />
        <div className={style.cartypeflex}>
          <img src={gear} alt="" />
          <p>Ford Ecosport</p>
          <img src={downarrow} alt="" />
        </div>
        <hr />
        <button className={style.cartypebtn} >Continue</button>
      </div>
    );
}

export default Cartype
