import React, { useState } from "react";
import style from "./expiry.module.css";
import calender from "./Calender.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
import {Link} from "react-router-dom"

function Expiry() {
  const [selectDateTP, setSelectDateTP] = useState("");
  const [selectDateOD, setSelectDateOD] = useState("");

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
        <div className={style.datetpdiv}>
          <img className={style.calenderimg} src={calender} alt="" />
          <DatePicker
            className={style.expirydatepicker}
            placeholderText="TP Plan Expiry Date"
            selected={selectDateTP}
            onChange={(date) => setSelectDateTP(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
        <div className={style.dateoddiv}>
          <img className={style.calenderimg} src={calender} alt="" />
          <DatePicker
            className={style.expirydatepicker}
            placeholderText="OD Plan Expiry Date"
            selected={selectDateOD}
            onChange={(date) => setSelectDateOD(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
      </div>
      <Link to="/cars/policy" >
    
        <div style={{ marginTop: "25px" }}>
          <button className={style.expirycont} onClick={async () => {
            const id = localStorage.getItem("ackoid");
            const data = {
              tpdate: selectDateTP,
              oddate: selectDateOD
            }
            await axios.patch(`http://localhost:8080/cars/${id}`,data);
          }} >Continue</button>
        </div>
      </Link>
      <div style={{ marginTop: "20px", width: "400px" }}>
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
