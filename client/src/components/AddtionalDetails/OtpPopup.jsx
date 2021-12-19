import style from "./otppopup.css";
import {Link} from "react-router-dom"
import close from "./Close.svg"

import axios from "axios"

console.log("Inp op dfjsa");

export const OtpPopup = ({ OtpPopup, setOtpPopup }) => {


    return OtpPopup ? (
        <div className={style.ncbpopupbody}>
          <div className={style.congradiv}>
            <p>Congratulations</p>
            <img
              onClick={() => {
                setOtpPopup(false);
              }}
              src={close}
              alt=""
            />
          </div>
          <div className={style.ncbdiv}>Your NCB has been increased to 20%</div>
          <div>
            <Link to="/plans" >
           
              <button onClick={async () => {
                const id = localStorage.getItem("ackoid");
                const data = {
                  ncb:20
                }
                await axios.patch(`http://localhost:8080/cars/${id}`,data);
              }} className={style.popupbtn}>Continue</button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      );
}