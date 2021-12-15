import React from 'react'
import Header from '../../Header/Header';
import Common from '../Common/Common';
import Dynamic from '../Dynamic/Dynamic';
import Pincode from './Pincode';
import style from "../cars.module.css"

function Routepincode() {
    return (
      <div>
        <Header />
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
          <Pincode/>
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
      </div>
    );
}

export default Routepincode
