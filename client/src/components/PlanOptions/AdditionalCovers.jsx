import styled from "styled-components";
import Header from "../Header/Header";
import styles from "./DiffPlanOptions.module.css";
import recommended from "./assets/recommended.svg";
import {
  calendarSvg,
  carSvg,
  emiSvg,
  mapSvg,
  needHelpSvg,
} from "./assets/svgs";
import { images } from "./assets/imgs";
import { useState } from "react";

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
  height: 400px;
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
  const riskValues = {
    high: (carDetails.carValue * 0.294023904).toFixed(2),
    low: carDetails.carValue.toFixed(2),
  };

  const [insuredValue, setInsuredValue] = useState(
    (riskValues.low / 2).toFixed(2)
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
    (insuredValue * 0.549322709 * 1000).toFixed(0)
  );

  const [smartSaverZeroDepreciationPlan, setsmartSaverZeroDepreciationPlan] =
    useState((insuredValue * 0.7803984 * 1000).toFixed(0));
  const [zeroDepreciationPlan, setzeroDepreciationPlan] = useState(
    (insuredValue * 1.176494 * 1000).toFixed(0)
  );
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
              <div>3 Plans for your Ecosport</div>
              <div>
                {" "}
                <span>{emiSvg}</span> starting from ₹208
              </div>
              <div>
                {" "}
                <img src={recommended} alt="" />{" "}
              </div>
              <div>
                <div>
                  <div>Own Damage Plan</div>
                  <div>Recommended if you already have a third party plan</div>
                  <div>See Details</div>
                </div>
                <div>
                  <div>
                    ₹ {ownDamagePlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(ownDamagePlan * 2.44301924).toFixed(0)}{" "}
                    <span> + GST</span>
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <div className={styles.insidemainclass}>
            <div>
              <div>
                <div>
                  <div>Smart Saver Zero Depreciation Plan</div>
                  <div>
                    Gives you all the benefits of Bumper to bumper cover at a
                    discounted price
                  </div>
                  <div>See Details</div>
                </div>
                <div>
                  <div>
                    ₹ {smartSaverZeroDepreciationPlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(ownDamagePlan * 2.0595).toFixed(0)} <span> + GST</span>
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.insideLastClass}>
            <div>
              <div>
                <div>
                  <div>Zero Depreciation Plan</div>
                  <div>
                    Includes all benefits of Own Damage plan and covers full
                    cost of car parts during claims.
                  </div>
                  <div>See Details</div>
                </div>
                <div>
                  <div>
                    ₹ {zeroDepreciationPlan} <span> + GST</span>
                  </div>
                  <div>
                    ₹ {(zeroDepreciationPlan * 1.753569784).toFixed(0)}
                    <span> + GST</span>
                  </div>
                  <button>Select</button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </InContright>
      </Container>
    </div>
  );
};

// unused code

/**
 *   <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "16px",
                  // float: "left",
                  marginLeft: "16px",
                }}
              >
                Insured Declared Value (IDV)
              </span>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "18px",
                  marginLeft: "103px",
                  marginTop: "16px",
                  marginRight: "32px",
                  color: "#3F8FD8",
                }}
              >
                {" "}
                ₹{insuredValue} L
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  width: "105px",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "14px",
                  marginTop: "16px",
                  // float: "left",
                  marginLeft: "16px",
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
                  marginLeft: "220px",
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
                marginLeft: "16px",
                marginRight: "32px",
                marginTop: "8px",
              }}
            >
              <input
                min={riskValues.high}
                max={riskValues.low}
                onChange={handleSliderChange}
                step={0.01}
                type="range"
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
                  }}
                >
                  4 out of 5 users select an IDV within this range
                </div>
              </div>
            </div>
 */
