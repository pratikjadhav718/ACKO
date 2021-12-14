import React from "react";
import Header from "../Header/Header";
import style from "./cars.module.css";
import Common from "./Common/Common";
import Dynamic from "./Dynamic/Dynamic";
import Useofcar from "./Useofcar/Useofcar";

function Cars() {
  return (
    <div>
      <Header />
      <Common />
      <div className={style.divflex}>
        <div className={style.flexdiv1}>
          <Useofcar/>
        </div>
        <div className={style.flexdiv2}>
          <Dynamic/>
        </div>
      </div>
    </div>
  );
}

export default Cars;
