import React from 'react'
import style from "./typecarpopup.module.css"
import search from "./Search.svg"


function Typecarpopup({ setCarpopup, carpopup }) {
  return carpopup ? (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
        <img src={search} alt="" />
        <input type="text" placeholder="Search your car" />
      </div>
      <div className={style.topsearch}>Top search results</div>
    </div>
  ):""
}

export default Typecarpopup
