import React from "react";
import style from "./expiry.module.css";

function Expiry() {
  return (
    <div className={style.expirybody}>
      <div
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "24px",
          width: "300px",
        }}
      >
        Enter your Third Party and Own Damage expiry dates
      </div>
      <p
        style={{
          fontSize: "8px",
          lineHeight: "10px",
          fontWeight: "bold",
          fontStyle: "normal",
          marginTop: "15px",
        }}
      >
        Refer your current policy document
      </p>

      <div className={style.datemaindiv}>
        <div className={style.datetpdiv}></div>
        <div className={style.dateoddiv}></div>
      </div>
<div style={{marginTop:"25px"}} ><button className={style.expirycont} >Continue</button></div>
      <div style={{ marginTop: "16px" }}>
        <p className={style.expirypara}>
          Cars bought after Sept 2018 come with a bundled policy covering the
          car for 1year and third part for 3 years in case of an accident.
        </p>
        <p className={style.expirypara}>
          Own damage cover expired? Dont worry, we will insure your car after a
          quick car review
        </p>
      </div>
    </div>
  );
}

export default Expiry;
