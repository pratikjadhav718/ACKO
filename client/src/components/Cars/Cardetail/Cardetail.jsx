import React from "react";
import style from "./cardetail.module.css";
import buttonpen from "./Button pen.svg";
import ecosport from "./Eco sport.svg";
import carwithstar from "./Car with star.svg"
function Cardetail() {
  return (
    <div className={style.cardetailbody}>
      <div className={style.cardetailtopbody}>
        <div className={style.cardetaillefttopbody}>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "28px",
            }}
          >
            Here's your car.
          </div>
          {/* car number */}
          <div
            style={{
              background: "F5F5F5",
              fontSize: "18px",
              width: "100px",
              backgroundColor: "#F5F5F5",
              marginTop: "20px",
              borderRadius: "4px",
              fontWeight: "bolder",
              marginLeft: "10px",
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

      <div
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "15px",
          marginTop: "20px",
        }}
      >
        Do you have external CNG kit
      </div>
      <div></div>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "10px",
          color: "#8F909A",
        }}
      >
        Mobile Number
      </p>
      <input className={style.detailinp} placeholder="90000900000" />
      <div className={style.cardepara}>
        <p>We'll only use it to send you important policy updates. No spam,</p>
        <p style={{ textAlign: "center" }}>We Promise!!</p>
      </div>

      <div><button className={style.deebtn} >Continue</button></div>
      <div className={style.lastflexdiv} >
        <img src={carwithstar} alt="" />
        <p>Great car! Now let us offer you really great insurance for it</p>
      </div>
    </div>
  );
}

export default Cardetail;
