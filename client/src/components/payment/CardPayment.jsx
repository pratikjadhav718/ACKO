import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Header from "../Header/Header";
import {
  cardNumberSvg,
  cardSvg,
  justPaySvg,
  netBankSvg,
  upiSvg,
  walletSvg,
} from "./assets/svgs";
import styles from "./cardPayment.module.css";
import { SIdeDiv } from "./SideDiv";

export const CardPayment = () => {
  var data;
  const [paymentValues, setPaymentValues] = useState({
    netPreminum: "",
    gst: "",
    total: "",
  });
  useEffect(() => {
    try {
      let id = localStorage.getItem("ackoUserId");
      //http://localhost:8080/user/${id
      const res = axios
        .get(`https://acko.herokuapp.com/user/${id}`)
        .then((res) => {
          console.log(res.data);
          data = res.data;
          console.log(data);
          setPaymentValues({
            netPreminum: data.premium.toFixed(0),
            gst:
              (data.premium - data.ncbDiscountAmount + 141 + data.paCover) *
              (15 / 100),
            total: Math.round(
              data.premium -
                data.ncbDiscountAmount +
                141 +
                data.paCover +
                (data.premium - data.ncbDiscountAmount + 141 + data.paCover) *
                  (15 / 100)
            ),
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  const [allowPay, setAllowPay] = useState(false);
  const cvvChange = (e) => {
    if (e.target.value.length >= 3) {
      setAllowPay(true);
    }
  };
  const history = useHistory();
  const handlePayClick = () => {
    if (allowPay) {
      history.push("./successfull");
    } else {
      alert("Please fill the details");
    }
  };
  return (
    <div>
      {" "}
      <Header></Header>{" "}
      <div className={styles.mainContainer}>
        <div>
          {" "}
          <SIdeDiv svg={cardSvg} text={"Credit/Debit Card"}></SIdeDiv>{" "}
          <SIdeDiv svg={upiSvg} text={"UPI"}></SIdeDiv>{" "}
          <SIdeDiv svg={netBankSvg} text={"Netbanking"}></SIdeDiv>{" "}
          <SIdeDiv svg={walletSvg} text={"Wallets"}></SIdeDiv>{" "}
          <div>
            <div>Powered by {justPaySvg}</div>
          </div>
        </div>
        <div>
          <div>
            <div>Pay using Credit or Debit Card</div>
            <div>
              <div>Card Number</div>
              <div>
                {" "}
                <input
                  placeholder="Enter card number here"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9s]{13,19}"
                />
                {cardNumberSvg}
              </div>
            </div>
            <div>
              <div>
                <div>Expiry Date</div>
                <div>
                  {" "}
                  <input
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9s]{13,19}"
                    placeholder="MM/YY"
                  />
                </div>
              </div>
              <div>
                <div>CVV</div>
                <div>
                  {" "}
                  <input
                    onChange={cvvChange}
                    type="password"
                    inputmode="numeric"
                    pattern="[0-9s]{13,19}"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handlePayClick}
                style={{
                  background: allowPay ? "#5A68E7" : "#d6d9e0",
                  color: "white",
                }}
              >
                Pay Now
              </button>
            </div>
            <div>
              <img
                src="https://payments.juspay.in/web/images/theme_light/security_symbol.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div>
              <div>Own damage plan</div>
              <div>Ford Titanium AT</div>
              <div>
                <div>
                  <div>Net Premium</div>
                  <div>GST</div>
                  <div>Total</div>
                </div>
                <div>
                  <div>₹{paymentValues.netPreminum}</div>
                  <div>₹{paymentValues.gst}</div>
                  <div>₹{paymentValues.total}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
