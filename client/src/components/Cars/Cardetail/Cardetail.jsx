import React from "react";
import style from "./cardetail.module.css";
import buttonpen from "./Button pen.svg";
import ecosport from "./Eco sport.svg";

function Cardetail() {
  return (
    <div className={style.cardetailbody}>
      <div className={style.cardetailtopbody}>
        <div className={style.cardetaillefttopbody}>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "22px",
              lineHeight: "28px",
            }}
          >
            Here's your car.
          </div>
          {/* car number */}
          <div
            style={{
              background: "F5F5F5",

              width: "100px",
              backgroundColor: "#F5F5F5",
              marginTop: "20px",
              borderRadius: "4px",
              fontWeight: "bolder",
            }}
          >
            TN74MD12
          </div>

          <div className={style.editflexdiv}>
            {/* car Name */}
            <p>DFEWFDCCECEWDEDEW</p>
            <img src={buttonpen} alt="" />
          </div>
          {/* car detail */}
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "12px",
              lineHeight: "10px",
              color: " #5C5D65",
            }}
          >
            Titanium AT-(423432)-PETROL
          </p>
        </div>
        <div className={style.cardetailrighttopbody}>
          <img src={ecosport} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Cardetail;
