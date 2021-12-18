import React from 'react'
import style from "./typecarpopup.module.css"
import search from "./Search.svg"


function Typecarpopup({ setCarpopup, carpopup, setCar }) {
  return carpopup ? (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
        <img src={search} alt="" />
        <input onChange={(e) => {
          setCar(e.target.value)
        }} type="text" placeholder="Search your car" />
      </div>
      <div className={style.topsearch}>Top search results</div>
    </div>
  ) : (
    ""
  );
}

export default Typecarpopup
