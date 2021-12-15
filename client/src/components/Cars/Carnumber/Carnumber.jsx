import React from 'react'
import style from "./carnumber.module.css"

function Carnumber() {
    return (
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        >
          Enter your car number{" "}
        </div>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "12px",
          }}
        >
          This makes your purchase twice as fast
        </p>
        <input className={style.pininput} placeholder="TN74AQ5553" />
        <div style={{ marginTop: "15px" }}>
          <button className={style.pinbtn}>Continue</button>
        </div>
      </div>
    );
}

export default Carnumber
