import React from "react";
import style from "./useofcar.module.css";
import percar from "./personelcar.svg";
import colorcar from "./colorcar.svg"

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
          textAlign:"center"
        }}
      >
        What do you use car for?
      </div>
      <div className={style.personalcardiv}>
        <div>
          <img src={percar} style={{ marginTop: "20px" }}></img>
        </div>
        <div>
          <p
            style={{
              lineHeight: "10px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Personal Use
          </p>
          <p
            style={{
              lineHeight: "10px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "10px",
              color: "#8A909F",
            }}
          >
            White Number Plate
          </p>
        </div>
      </div>

      <div className={style.personalcardiv}>
        <div>
          <img src={colorcar} style={{ marginTop: "20px" }}></img>
        </div>
        <div>
          <p
            style={{
              lineHeight: "10px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Commercial Use
          </p>
          <p
            style={{
              lineHeight: "10px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "10px",
              color: "#8A909F",
            }}
          >
            Yellow Number Plate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Useofcar;
