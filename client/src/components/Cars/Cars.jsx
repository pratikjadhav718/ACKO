import React from "react";
import Header from "../Header/Header";
import style from "./cars.module.css";
import Common from "./Common/Common";

function Cars() {
  return (
    <div>
      <Header />
      <Common />
      <div className={style.divflex}>
        <div className={style.flexdiv1}></div>
        <div className={style.flexdiv2}></div>
      </div>
    </div>
  );
}

export default Cars;
