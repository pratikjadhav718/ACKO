import React, { useState } from 'react'
import style from "./cartype.module.css"
import car from "./Personel car.svg"
import petrol from "./petrol.svg"
import gear from "./gear.svg"
import downarrow from "./Down arrow.svg"
import Petrolpopup from '../Petrolpopup/Petrolpopup'
function Cartype() {

    const [carr, setCar] = useState("Ford Ecosport");

    const [fuel, setFuel] = useState("Petrol");

    const [gearr, setGear] = useState("Titanium AT")
    
    const [petrolpopup,setPetrolpopup]=useState(false)


    return (
      <div className={style.cartypebody}>
        <div className={style.cartypehead}>Which Car do you drive?</div>
        <div className={style.cartypeflex}>
          <img src={car} alt="" />
          <p>{carr}</p>
          <img className={style.imagearrow} src={downarrow} alt="" />
        </div>
        <hr />

        <div className={style.cartypeflex}>
          <img src={petrol} alt="" />
          <p>{fuel}</p>
          <img
            onClick={() => {
              setPetrolpopup(!petrolpopup);
            }}
            className={style.imagearrow}
            src={downarrow}
            alt=""
          />
        </div>
        <hr />
        <Petrolpopup
          petrolpopup={petrolpopup}
          setFuel={setFuel}
          setPetrolpopup={setPetrolpopup}
        />
        <div className={style.cartypeflex}>
          <img src={gear} alt="" />
          <p>{gearr}</p>
          <img className={style.imagearrow} src={downarrow} alt="" />
        </div>
        <hr />
        <button className={style.cartypebtn}>Continue</button>
      </div>
    );
}

export default Cartype
