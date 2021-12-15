import React from 'react'
import Header from '../../Header/Header';
import Common from '../Common/Common';
import Dynamic from '../Dynamic/Dynamic';
import Carnumber from './Carnumber';
import style from "../cars.module.css"

function Routecarnumber() {
    return (
      <div>
        <Header />
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
           <Carnumber/>
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
      </div>
    );
}

export default Routecarnumber
