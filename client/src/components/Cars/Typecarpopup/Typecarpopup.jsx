import React from 'react'
import style from "./typecarpopup.module.css"
import search from "./Search.svg"


function Typecarpopup() {
    return (
      <div className={style.typecarpopup}>
        <div className={style.inputflexdiv} >
          <img src={search} alt="" />
          <input type="text" />
        </div>
      </div>
    );
}

export default Typecarpopup
