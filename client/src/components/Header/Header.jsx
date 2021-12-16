import React from "react";
import style from "./header.module.css";
import logo from "./Logo.svg";

function Header() {
  return (
    <div className={style.headerbody}>
      <div className={style.headerlogodiv}>
        <img
          style={{ fontSize: "64px" }}
          className={style.circlelogo}
          src={logo} alt=""
        ></img>
      </div>
    </div>
  );
}

export default Header;
