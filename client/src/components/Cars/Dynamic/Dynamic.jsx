import React, { useEffect, useState } from "react";
import style from "./dynamic.module.css";
import axios from "axios";
import buttonpen from "./Button pen.svg";
import calender from "./Cal.svg";
import car from "./car.svg";
import date from "./Date.svg";
import location from "./Location.svg";

function Dynamic() {
  const id = localStorage.getItem("ackoid");

  const [dataaa, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.log(dataaa);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8080/cars/${id}`);
    setData([data]);
  };

  return (
    <div className={style.dynamicbody}>
      {dataaa.map((e) => (
        <div className={style.dynamicsecbody} key={e._id}>
          {e.number && (
            <div>
              <img className={style.img11} src={car} alt="" />
              <p>{e.number}</p>

              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}
          {e.pincode && (
            <div>
              <img className={style.img11} src={location} alt="" />
              <p>{e.pincode}</p>
              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}

          {e.name && (
            <div>
              <img className={style.img11} src={car} alt="" />
              <p>{e.name}</p>
              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}

          {e.oddate && (
            <div>
              <img className={style.img11} src={date} alt="" />
              <p>{e.oddate}</p>
              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}

          {e.tpdate && (
            <div>
              <img className={style.img11} src={date} alt="" />
              <p>{e.tpdate}</p>
              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}

          {e.year && (
            <div>
              <img className={style.img11} src={calender} alt="" />
              <p>{e.year}</p>
              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}

          {e.month && (
            <div>
              <img className={style.img11} src={calender} alt="" />
              <p>{e.month}</p>
              <img className={style.img22} src={buttonpen} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dynamic;
