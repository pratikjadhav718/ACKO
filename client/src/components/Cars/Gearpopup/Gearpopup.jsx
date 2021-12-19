import React, { useState } from 'react'
import style from "./gearpopup.module.css"
import search from "./Search.svg"

function Gearpopup({ gearpopup, setGearpopup, setGear }) {
   const [valuee, setValuee] = useState("");
  return gearpopup ? (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
        <img src={search} alt="" />
        <input
          value={valuee}
          onChange={(e) => {}}
          type="text"
          placeholder="Search your car's variant type"
        />
      </div>
      <div className={style.topsearch}>Top search results</div>
      <select
        style={{ width: "100%", cursor: "pointer" }}
        onChange={(e) => {
          setValuee(e.target.value);
          setGear(e.target.value);
        }}
      >
        <option value="Titanium AT">Titanium AT</option>
        <option value="Gear Premium">Gear Premium</option>
        <option value="STATION WAGON">STATION WAGON</option>
        <option value="HATCHBACK">HATCHBACK</option>
      </select>
    </div>
  ) : (
    ""
  );
}

export default Gearpopup
