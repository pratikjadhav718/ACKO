import React, { useState } from "react";
import style from "./year.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Year() {
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
          <button name="2021" onClick={handleClick}>
            2021
          </button>
        </div>
        <div>
          <button name="2020" onClick={handleClick}>
            2020
          </button>
        </div>
        <div>
          <button name="2019" onClick={handleClick}>
            2019
          </button>
        </div>
        <div>
          <button name="2018" onClick={handleClick}>
            2018
          </button>
        </div>
        <div>
          <button name="2017" onClick={handleClick}>
            2017
          </button>
        </div>
        <div>
          <button name="2016" onClick={handleClick}>
            2016
          </button>
        </div>
        <div>
          <button name="2015" onClick={handleClick}>
            2015
          </button>
        </div>
        <div>
          <button name="2014" onClick={handleClick}>
            2014
          </button>
        </div>
        <div>
          <button name="2013" onClick={handleClick}>
            2013
          </button>
        </div>
        <div>
          <button name="2012" onClick={handleClick}>
            2012
          </button>
        </div>
        <div>
          <button name="2011" onClick={handleClick}>
            2011
          </button>
        </div>
        <div>
          <button name="2010" onClick={handleClick}>
            2010
          </button>
        </div>
        <div>
          <button name="2009" onClick={handleClick}>
            2009
          </button>
        </div>
        <div>
          <button name="2008" onClick={handleClick}>
            2008
          </button>
        </div>
        <div>
          <button name="2007" onClick={handleClick}>
            2007
          </button>
        </div>
        <div>
          <button name="2006" onClick={handleClick}>
            2006
          </button>
        </div>
        <div>
          <button name="Before 2006" onClick={handleClick}>
            Before 2006
          </button>
        </div>

        <Link to="/cars/month">
          <button
            className={style.yearbtn}
            onClick={async () => {
              const id = localStorage.getItem("ackoid");
              const data = { year: value };
              // await axios.patch(`http://localhost:8080/cars/${id}`, data);
              await axios.patch(`https://acko.herokuapp.com/cars/${id}`, data);
            }}
          >
            Continue
          </button>
        </Link>
      </div>

      <Link to="/cars/month">
        <button
          className={style.yearbtn}
          onClick={async () => {
            const id = localStorage.getItem("ackoid");
            const data = { year: value };
            await axios.patch(`http://localhost:8080/cars/${id}`, data);
          }}
        >
          Continue
        </button>
      </Link>
    </div>
  );
}

export default Year;
