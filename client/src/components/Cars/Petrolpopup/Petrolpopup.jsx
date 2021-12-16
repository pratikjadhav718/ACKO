import React from 'react'
import style from "./petrol.module.css"

function Petrolpopup({ petrolpopup }) {
  return petrolpopup ?(
    <div className={style.petrolpopup}>
      <p>Petrol</p>
      <hr />
      <p>Diesel</p>
    </div>
  ):""
}

export default Petrolpopup
