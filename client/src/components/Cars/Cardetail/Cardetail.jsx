import React from "react";
import style from "./cardetail.module.css";
import buttonpen from "./Button pen.svg";
import ecosport from "./Eco sport.svg";

function Cardetail() {
  return (
    <div className={style.cardetailbody} >
      <div className={style.cardetailtopbody}>
        <div className={style.cardetaillefttopbody}>
          <div>Here's your car.</div>
          {/* car number */}
          <p>TN74MD1234</p>

          <div className={style.editflexdiv}>
            {/* car Name */}
            <p>DFEWFDCCECEWDEDEW</p>
            <img src={buttonpen} alt="" />
          </div>
          {/* car detail */}
          <p>qedeqedeqdeq-PETROL</p>
        </div>
        <div className={style.cardetailrighttopbody}>
          <img src={ecosport} alt="" />
        </div>
          </div>
          <hr/>
    </div>
  );
}

export default Cardetail;
