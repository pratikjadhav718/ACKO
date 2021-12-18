import styled from "styled-components";
import Header from "../Header/Header";
import styles from "./AdditionalCovers.module.css";
import recommended from "./assets/recommended.svg";
import {
  accidentsSvg,
  calendarSvg,
  carBurnSvg,
  carFloodSvg,
  carSvg,
  carTheftSvg,
  consumablesSvg,
  emiSvg,
  mapSvg,
  ncbProtectSvg,
  needHelpSvg,
  passengerAccidentSvg,
  personalAccidentSvg,
} from "./assets/svgs";
import { images } from "./assets/imgs";
import { useEffect, useState } from "react";
import { SingleAdditionalCover } from "./SingleAdditionalCovers";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  //background-color: green;
  //height: 400px;
  width: 752px;
  margin: auto;
  margin-top: 64px;
  display: flex;
  grid-gap: 16px;
`;
const InContleft = styled.div`
  background-color: #ffffff;
  height: 335px;
  width: 368px;
  border: 1px solid #dcdee9;
`;
const InContright = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 368px;
  // margin-left: 10.9%;
  border: 1px solid #dcdee9;
`;

export const AdditionalCovers = () => {
  const carDetails = {
    liscencePlate: "MH04KL5359",
    vehicleName: "Ford Ecosport",
    NCB: "20%",
    registrationMonthYear: "Nov, 2020",
    carValue: 12.55,
  };
  const pincode = 400607;

  const history = useHistory();
  const riskValues = {
    high: (carDetails.carValue * 0.294023904).toFixed(2),
    low: carDetails.carValue.toFixed(2),
  };

  const [insuredValue, setInsuredValue] = useState(
    Number(localStorage.getItem("currentIDV"))
  );

  const handleSliderChange = (e) => {
    setInsuredValue(Number(e.target.value).toFixed(2));
    setOwnDamagePlan((insuredValue * 0.549322709 * 1000).toFixed(0));
    setsmartSaverZeroDepreciationPlan(
      (insuredValue * 0.7803984 * 1000).toFixed(0)
    );
    setzeroDepreciationPlan((insuredValue * 1.176494 * 1000).toFixed(0));
  };
  const [ownDamagePlan, setOwnDamagePlan] = useState(
    Number(localStorage.getItem("currentPremium"))
  );

  const [smartSaverZeroDepreciationPlan, setsmartSaverZeroDepreciationPlan] =
    useState((insuredValue * 0.7803984 * 1000).toFixed(0));
  const [zeroDepreciationPlan, setzeroDepreciationPlan] = useState(
    (insuredValue * 1.176494 * 1000).toFixed(0)
  );

  const [added, setAdded] = useState(0);
  let totalPrice = ownDamagePlan;

  const AdditionalCoverSelected = (price) => {
    setAdded((props) => Number(props) + Number(price));
  };
  totalPrice = +ownDamagePlan + +added;
  const sendData = () => {
    axios
      .post(`http://localhost:8080/user`, {
        selectedPlan: "Own Damage Plan",
        mobile: "",
        premium: +ownDamagePlan,
        paCover: +added,
        ncbPercentage: "",
      })
      .then((res) => {
        localStorage.setItem("ackoUserId", res.data._id);
      });
  };
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <InContleft>
          <div
            style={{
              border: "1px solid #dcdee9",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <div
              style={{
                paddingTop: "13px",
                paddingBottom: "13px",
              }}
            >
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex" }}>
                  {" "}
                  {carSvg}{" "}
                  <span className={styles.vehicle}>
                    {" "}
                    {carDetails.liscencePlate} {carDetails.vehicleName}
                  </span>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex", color: "#8A909F" }}>
                  {" "}
                  {calendarSvg}{" "}
                  <span className={styles.vehicle}>
                    {" "}
                    NCB - {carDetails.NCB}{" "}
                  </span>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex", color: "#8A909F" }}>
                  {" "}
                  {calendarSvg}{" "}
                  <span className={styles.vehicle}>
                    {" "}
                    Registration in {carDetails.registrationMonthYear}
                  </span>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {" "}
                <div style={{ display: "flex", color: "#8A909F" }}>
                  {" "}
                  {mapSvg} <span className={styles.vehicle}> {pincode} </span>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  float: "right",
                  paddingRight: "18px",
                  paddingTop: "16px",
                  paddingBottom: "4px",
                  fontSize: "12px",
                }}
                className={styles.editLink}
              >
                <a href="" style={{ textDecoration: "none" }}>
                  <span style={{ color: "#528ae2" }}> Edit</span>{" "}
                </a>
              </div>
              <img
                style={{
                  width: "135px",
                  height: "60px",
                  marginTop: "16px",
                  float: "right",
                }}
                src={images.ecosport}
                alt=""
              />
            </div>
          </div>
          {/* second row */}
          <div
            style={{
              border: "1px solid #dcdee9",
              paddingBottom: "8px",
            }}
            className={styles.fontType}
          >
            <div className={styles.secondRowMain}>
              <div>Send Me The Quote</div>
              <div>
                {" "}
                Don’t miss out on these amazing prices, we will remind youbefore
                your current policy expires.
              </div>
              <div></div>
            </div>
            {/* until here second row */}
          </div>
          <div className={styles.needHelpMain}>
            <div>{needHelpSvg}</div>
            <div>
              <div>Need help with something?</div>
              <div>
                Request a callback, sit back relax! Our experts will help you
                with all your queries
              </div>
              <div>Talk to an expert {">"} </div>
            </div>
          </div>
        </InContleft>
        <InContright>
          <div className={styles.insideContRight}>
            <div>
              <div>Own Damage Plan</div>
              <div>
                {" "}
                <div>
                  {" "}
                  {accidentsSvg} <span> Accidents</span>{" "}
                </div>
                <div>
                  {" "}
                  {carBurnSvg} <span> Fire</span>{" "}
                </div>
                <div>
                  {" "}
                  {carTheftSvg} <span> Theft</span>
                </div>
                <div>
                  {" "}
                  {carFloodSvg} <span> Calamities </span>
                </div>
                <div>
                  {" "}
                  {consumablesSvg} <span> Consumables </span>
                </div>
              </div>
              <div> Insured Declared Value (IDV) ₹{insuredValue}L</div>
              <div>Amount you will recieve in case of total damage/theft</div>

              <div style={{ display: "flex" }}>
                <span
                  style={{
                    fontStyle: "normal",
                    width: "125px",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "14px",
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "12px",
                    }}
                  >
                    {riskValues.high}L
                  </div>{" "}
                  <div
                    style={{
                      fontSize: "10px",
                      lineHeight: "10px",
                    }}
                  >
                    HIGH RISK
                  </div>
                </span>
                <span
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    width: "150px",
                    fontSize: "14px",
                    lineHeight: "16px",
                    marginLeft: "235px",
                    marginTop: "16px",

                    color: "#3F8FD8",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "12px",
                    }}
                  >
                    {riskValues.low}L
                  </div>{" "}
                  <div
                    style={{
                      fontSize: "10px",
                      lineHeight: "10px",
                    }}
                  >
                    LOW RISK
                  </div>
                </span>
              </div>

              <div
                style={{
                  height: "16px",
                  marginTop: "8px",
                }}
              >
                <input
                  min={riskValues.high}
                  max={riskValues.low}
                  onChange={handleSliderChange}
                  step={0.01}
                  type="range"
                  value={insuredValue}
                />
              </div>

              <div
                style={{
                  //height: "16px",
                  marginLeft: "16px",
                  marginRight: "32px",
                  marginTop: "8px",

                  display: "grid",
                  justifyContent: "right",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    marginTop: "-5px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #3EB753",
                      borderTopColor: "white",
                      height: "6px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "0",
                      height: "0",
                      margin: "auto",
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid #3EB753",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "8px",
                      textAlign: "center",
                      marginBottom: "5px",
                    }}
                  >
                    4 out of 5 users select an IDV within this range
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div> Additional Covers</div>
              <SingleAdditionalCover
                svg={personalAccidentSvg}
                heading="Personal Accident Cover @"
                price="399"
                body={"Rs. 15 lakh coverage against accidental injury or death"}
                add={AdditionalCoverSelected}
              ></SingleAdditionalCover>
            </div>
            <SingleAdditionalCover
              svg={ncbProtectSvg}
              heading="NCB Protect @"
              price="175"
              body={
                "Get yourself extra cushioning by keeping your no claim bonus intact even in the event of a claim. Applicable only for 1 claim."
              }
              add={AdditionalCoverSelected}
            ></SingleAdditionalCover>
            <div>
              <SingleAdditionalCover
                svg={passengerAccidentSvg}
                heading="Personal Accident Cover for Passengers @"
                price="250"
                body={
                  "Protect your loved ones in cause of unfortunate accidents. Coverage upto INR 1 Lakh per passenger."
                }
                add={AdditionalCoverSelected}
              ></SingleAdditionalCover>
              <div>
                <button>
                  {" "}
                  <span> 3 more covers</span> <span> ⌄</span>{" "}
                </button>
              </div>
              <div>
                <div>
                  ₹{totalPrice} <span>+GST</span>
                </div>
                <div>
                  <div>
                    ₹ {(totalPrice * 2.44301924).toFixed(0)} <span>+GST</span>{" "}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      sendData();
                      history.push("./addtional-details");
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                {" "}
                <span>{emiSvg}</span> starting from ₹208{" "}
                <span>{"View Plans >"} </span>
              </div>
            </div>
          </div>
        </InContright>
      </Container>
    </div>
  );
};
