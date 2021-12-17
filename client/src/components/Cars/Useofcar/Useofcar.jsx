import React from "react";
import style from "./useofcar.module.css";
import percar from "./personelcar.svg";
import colorcar from "./colourcar.svg";
import caronhand from "./Car on hand.svg";
import { Link } from "react-router-dom";
import axios from "axios"

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
          textAlign: "center",
        }}
      >
        What do you use car for?
      </div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/cars/pincode"
      >
        <div
          onClick={async () => {
            try {
              const data = { useofcar: "Personal use" };
              const res = await axios.post("http://localhost:8080/cars", data);
              // console.log(res.data._id);
              const id = res.data._id;
              localStorage.setItem("ackoid", id)
            } catch (err) {
              console.log(err.message);
            }
          }}
          className={style.personalcardiv}
        >
          <div>
            <img src={percar} style={{ marginTop: "20px" }} alt=""></img>
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
      </Link>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/cars/pincode"
      >
        <div
          onClick={async () => {
            try {
              const data = { useofcar: "Commercial use" };
              const res = await axios.post("http://localhost:8080/cars", data);
              // console.log(res.data._id);
                  const id = res.data._id;
                  localStorage.setItem("ackoid", id);
            } catch (err) {
              console.log(err.message);
            }
          }}
          className={style.personalcardiv}
        >
          <div>
            <img src={colorcar} style={{ marginTop: "20px" }} alt=""></img>
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
      </Link>

      <div className={style.handcardiv}>
        <img src={caronhand} alt="" />
        <p style={{ fontSize: "14px", fontWeight: "normal" }}>
          We've insured more than 5 Lakh cars in India till date
        </p>
      </div>
    </div>
  );
}

export default Useofcar;
