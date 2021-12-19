import Header from "../Header/Header";
import {
  cardNumberSvg,
  cardSvg,
  netBankSvg,
  upiSvg,
  walletSvg,
} from "./assets/svgs";
import styles from "./cardPayment.module.css";
import { SIdeDiv } from "./SideDiv";

export const CardPayment = () => {
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
                    type="tel"
                    inputmode="numeric"
                    pattern="[0-9s]{13,19}"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <div>
              <button style={{ background: "#d6d9e0", color: "white" }}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div>d</div>
      </div>
    </div>
  );
};
