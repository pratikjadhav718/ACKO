import React from 'react'
import style from "../cars.module.css"
import Expiry from './Expiry';
import Header from "../../Header/Header"
import Common from "../Common/Common"
import Dynamic from "../Dynamic/Dynamic"

function Routeexpiry() {
    return (
      <div>
        <Header />
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
           <Expiry/>
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
      </div>
    );
}

export default Routeexpiry
