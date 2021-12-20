import React, { useState } from "react";
import style from "./typecarpopup.module.css";
import search from "./Search.svg";

function Typecarpopup({ setCarpopup, carpopup, setCar }) {
  const [value, setValue] = useState("");
  return carpopup ? (
    <div className={style.typecarpopup}>
      <div className={style.inputflexdiv}>
        <img src={search} alt="" />
        <input value={value} type="text" placeholder="Search your car" />
      </div>
      <div className={style.topsearch}>Top search results</div>
      <select
        style={{ width: "100%", cursor: "pointer" }}
        onChange={(e) => {
          setValue(e.target.value);
          setCar(e.target.value);
          setCarpopup(false);
        }}
      >
        <option value="Swift">Swift</option>
        <option value="Saab">Saab</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="Ford Eco sport">Ford Eco sport</option>
        <option value="Swift">Swift</option>
        <option value="Wangnr">Wangnr</option>
        <option value="Tesla">Tesla</option>
        <option value="Ferrari">Ferrari</option>
        <option value="JEEP">JEEP</option>
      </select>
    </div>
  ) : (
    ""
  );
}

export default Typecarpopup;
