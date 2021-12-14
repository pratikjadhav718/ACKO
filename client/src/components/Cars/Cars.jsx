import React from "react";
import Header from "../Header/Header";
import style from "./cars.module.css";


function Cars() {
  return (
    <div className={style.carsbody}>
      <Header />
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "32px",
          textAlign: "center",
          fontStyle: "normal",
          letterSpacing: "0.02em",
          marginTop: "80px",
        }}
      >
        Upto 85% Off Comprehensive Car Insurance
      </div>
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "26px",
          color: "#8A909F",
          marginTop: "10px",
        }}
      >
        Insure your car in 2 minutes
      </div>
      <div className={style.divflex}>
        <div className={style.flexdiv1}>
      
        </div>
        <div className={style.flexdiv2}></div>
      </div>
    </div>
  );
}

export default Cars;
