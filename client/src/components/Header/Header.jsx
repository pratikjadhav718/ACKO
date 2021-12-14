import React from 'react'
import acko from "./ackologo.svg"
import style from "./header.module.css"
import circle from "./greencle.svg"
import back from "./backviolet.svg"

function Header() {
    return (
      <div className={style.headerbody}>
            <div className={style.headerlogodiv}>
                {/* <img className={style.backviolet}  src={back} /> */}
                <img className={style.headerlogo} src={acko}></img>
                <img className={style.circlelogo} src={circle} ></img>
        </div>
      </div>
    );
}

export default Header
