import React from 'react'
import style from "../cars.module.css"
import Header from '../../Header/Header';
import Common from '../Common/Common';
import Useofcar from './Useofcar';
import Dynamic from '../Dynamic/Dynamic';

function Routeuseofcar() {
    return (
      <div>
        <Header />
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
            <Useofcar />
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
      </div>
    );
}

export default Routeuseofcar
