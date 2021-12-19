import React, { useState } from "react";
import style from "./month.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Month() {
  const [value, setValue] = useState("");

  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    e.target.parentElement.style.border = "1px solid #8C76DF";
    if (alreadyClicked) {
      alreadyClicked.style.border = "none";
    }
    setAlreadyClicked(e.target.parentElement);
    setValue(name);
  };

  return (
    <div className={style.yearbody}>
      <p>Which year did you buy your car?</p>

      <div className={style.yearflexdiv}>
        <div>
          <button name="Jan" onClick={handleClick}>
            Jan
          </button>
        </div>
        <div>
          <button name="Feb" onClick={handleClick}>
            Feb
          </button>
        </div>
        <div>
          <button name="Mar" onClick={handleClick}>
            Mar
          </button>
        </div>
        <div>
          <button name="Apr" onClick={handleClick}>
            Apr
          </button>
        </div>
        <div>
          <button name="May" onClick={handleClick}>
            May
          </button>
        </div>
        <div>
          <button name="June" onClick={handleClick}>
            June
          </button>
        </div>
        <div>
          <button name="Aug" onClick={handleClick}>
            Aug
          </button>
        </div>
        <div>
          <button name="Sep" onClick={handleClick}>
            Sep
          </button>
        </div>
        <div>
          <button name="Oct" onClick={handleClick}>
            Oct
          </button>
        </div>
        <div>
          <button name="Nov" onClick={handleClick}>
            Nov
          </button>
        </div>
        <div>
          <button name="Dec" onClick={handleClick}>
            Dec
          </button>
        </div>
      </div>

      <Link to="/cars/cartype">
        {" "}
        <button
          className={style.yearbtn}
          onClick={async () => {
            const id = localStorage.getItem("ackoid");
            const data = { month: value };
            await axios.patch(`http://localhost:8080/cars/${id}`, data);
          }}
        >
          Continue
        </button>
      </Link>
    </div>
  );
}

export default Month;
