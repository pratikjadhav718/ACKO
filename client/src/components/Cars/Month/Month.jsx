import React,{useState} from 'react'
import style from "./month.module.css"

function Month() {
    const [value, setValue] = useState("");

    const handleClick = (e) => {
      e.preventDefault();
      const name = e.target.name;
      setValue(name);
    };
    console.log(value);

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

        <button className={style.yearbtn}>Continue</button>
      </div>
    );
}

export default Month
