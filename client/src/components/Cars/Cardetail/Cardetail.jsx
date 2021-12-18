import React, { useState,useEffect } from "react";
import style from "./cardetail.module.css";
import buttonpen from "./Button pen.svg";
import ecosport from "./Eco sport.svg";
import carwithstar from "./Car with star.svg";
import axios from "axios";
import { Link } from "react-router-dom";

function Cardetail() {
  const [cng, setCng] = useState("");

  const [mobile, setMobile] = useState("");

  const [dat,setDat]=useState("")

  const id = localStorage.getItem("ackoid");

 useEffect(() => {
   getData();
 }, []);
 
 const getData = async () => {
   const { data } = await axios.get(`http://localhost:8080/cars/${id}`);
   setDat(data);
 };

  return (
    <div className={style.cardetailbody}>
      <div className={style.cardetailtopbody}>
        <div className={style.cardetaillefttopbody}>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
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
            {dat.number}
          </div>

          <div style={{}} className={style.editflexdiv}>
            {/* car Name */}
            <p>{dat.name}</p>
            <Link to="/cars/cartype" >
             
              <img style={{width:"15px"}}  src={buttonpen} alt="" />
            </Link>
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
            {dat.gear}-{dat.fuel}
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
          fontSize: "14px",
          lineHeight: "15px",
          marginTop: "20px",
        }}
      >
        Do you have external CNG kit
      </div>
      <div className={style.labeldiv}>
        <label>
          <input
            type="radio"
            name="same"
            onClick={() => {
              setCng("Yes");
            }}
          />
          Yes
        </label>
        <label style={{ marginLeft: "30px" }}>
          <input
            type="radio"
            name="same"
            onClick={() => {
              setCng("No");
            }}
          />
          No
        </label>
      </div>
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
      <input
        className={style.detailinp}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        placeholder="90000900000"
      />
      <div className={style.cardepara}>
        <p>We'll only use it to send you important policy updates. No spam,</p>
        <p style={{ textAlign: "center" }}>We Promise!!</p>
      </div>

      <Link to="/cars/expiry">
        <div>
          <button
            onClick={async () => {
              const id = localStorage.getItem("ackoid");
              const data = {
                cngkit: cng,
                mobile: mobile,
              };
              await axios.patch(`http://localhost:8080/cars/${id}`, data);
            }}
            className={style.deebtn}
          >
            Continue
          </button>
        </div>
      </Link>
      <div className={style.lastflexdiv}>
        <img src={carwithstar} alt="" />
        <p>Great car! Now let us offer you really great insurance for it</p>
      </div>
    </div>
  );
}

export default Cardetail;
