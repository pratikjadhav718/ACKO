import styled from "styled-components";
import Header from "../Header/Header";
import styles from "./DiffPlanOptions.module.css";
import {
  calendarSvg,
  carSvg,
  mapSvg,
  needHelpSvg,
  sliderThumb,
} from "./assets/svgs";
import { images } from "./assets/imgs";

const Container = styled.div`
  //background-color: green;
  height: 400px;
  width: 52.2222222%;
  margin: auto;
  margin-top: 64px;
  display: flex;
  justify-content: left;
`;
const InContleft = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 304px;
  border: 1px solid #dcdee9;
`;
const InContright = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 368px;
  margin-left: 10.9%;
  border: 1px solid #dcdee9;
`;

export const DifferentPlanOptions = () => {
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
                    MH04KL5359 Ford Ecosport{" "}
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
                  <span className={styles.vehicle}> NCB - 20% </span>
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
                    Registration in Nov, 2020{" "}
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
                  {mapSvg} <span className={styles.vehicle}> 400607 </span>
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
                  fontSize: "10px",
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
          <div
            style={{
              border: "1px solid #dcdee9",
              paddingBottom: "8px",
            }}
            className={styles.fontType}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "14px",
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
                  marginLeft: "45px",
                  marginTop: "16px",
                  marginRight: "32px",
                  color: "#3F8FD8",
                }}
              >
                {" "}
                ₹6.65 L
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "normal",
                  width: "100px",
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
                    fontSize: "10px",
                    lineHeight: "12px",
                  }}
                >
                  3.69L
                </div>{" "}
                <div
                  style={{
                    fontSize: "8px",
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
                  marginLeft: "174px",
                  marginTop: "16px",

                  color: "#3F8FD8",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    lineHeight: "12px",
                  }}
                >
                  12.55L
                </div>{" "}
                <div
                  style={{
                    fontSize: "8px",
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
              <input type="range" />
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
        <InContright></InContright>
      </Container>
    </div>
  );
};
