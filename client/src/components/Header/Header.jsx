import React from "react";
import style from "./header.module.css";
import logo from "./Logo.svg";

function Header() {
  return (
    <div className={style.headerbody}>
      <div className={style.headerlogodiv}>
      <a href="/">
        <img
          style={{ fontSize: "64px" }}
          className={style.circlelogo}
          src={logo} alt=""
        ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
