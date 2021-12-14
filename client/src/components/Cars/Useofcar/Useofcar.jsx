import React from "react";
import style from "./useofcar.module.css";
import percar from "./personelcar.svg";

function Useofcar() {
  return (
    <div className={style.useofcarbody}>
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "28px",
          alignItems: "center",
        }}
      >
        What do you use car for?
      </div>
      <div
        className={style.personalcardiv}
        style={{
          width: "30%",
          margin: "20px auto",
          height: "47px",
          background: "#F4F7FE",
        }}
      >
        <div>
          <img src={percar} style={{ marginTop: "10px" }}></img>
        </div>
        <div>
          <p
            style={{
              lineHeight: "10px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Personal Use
          </p>
          <p
            style={{
              lineHeight: "10px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "8px",
              color: "#8A909F",
            }}
          >
            White Number Plate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Useofcar;
