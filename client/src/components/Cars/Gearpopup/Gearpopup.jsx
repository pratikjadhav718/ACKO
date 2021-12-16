import React from 'react'
import style from "./gearpopup.module.css"
import search from "./Search.svg"

function Gearpopup({ gearpopup, setGearpopup }) {
  return gearpopup ?  (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
        <img src={search} alt="" />
        <input type="text" placeholder="Search your car's variant type" />
      </div>
      <div className={style.topsearch}>Top search results</div>
    </div>
  ):""
}

export default Gearpopup
