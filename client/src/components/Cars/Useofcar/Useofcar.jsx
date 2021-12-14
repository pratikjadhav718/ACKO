import React from "react";
import style from "./useofcar.module.css";
import percar from "./personelcar.svg";

function Useofcar() {
  return (
    <div style={{ border: "1px solid black" }}>
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "28px",
          alignItems: "center",
        }}
      >
        What do you use car for?
      </div>
      <div
        style={{
     
          width: "30%",
          margin: "20px auto",
          height: "47px",
          background: "#F4F7FE",
        }}
      >
        <div className={style.personalcardiv}>
          <img src={percar}></img>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Useofcar;
