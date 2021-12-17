import React from 'react'
import style from "./petrol.module.css"

function Petrolpopup({ petrolpopup, setFuel, setPetrolpopup }) {
  return petrolpopup ? (
    <div className={style.petrolpopup}>
      <p
        onClick={() => {
          setFuel("Petrol")
          setPetrolpopup(false)
        }}
      >
        Petrol
      </p>
      <hr />
      <p
        onClick={() => {
          setFuel("Diesel")
          setPetrolpopup(false)
        }}
      >
        Diesel
      </p>
    </div>
  ) : (
    ""
  );
}

export default Petrolpopup
