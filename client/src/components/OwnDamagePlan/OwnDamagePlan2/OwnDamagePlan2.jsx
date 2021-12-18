import axios from "axios";
import { useEffect, useState } from "react";
import "./owndamageplan2.css";
import ticmark from "./ticmark.svg"
export const OwnDamagePlan2 = () => {

    const id2 = localStorage.getItem("ackoUserId");

      const [data, setData] = useState("");

        const getData = async () => {
          const {data} = await axios.get(`http://localhost:8080/user/${id2}`);
          setData(data);
        };

        useEffect(() => {
          getData();
        }, []);
    
    return (
      <div className="owndamageplandiv22">
        <div className="owndamagetopdiv">
          <p className="owndamageplan2title">Own Damage Plan</p>
          <p className="owndamageplan2subtitle">Hide Premium Breakup</p>
        </div>
        <div className="owndamageplanprices1">
          <div>Own Damage Premium</div>
          <div>₹ {data.premium} </div>

          <div>NCB Discount</div>
          <div>- ₹ {"5454"}</div>
          <div>Consumables Premium</div>
          <div>₹ {data.ncbDiscountAmount}</div>
        </div>
        <p className="addonsdivstyle">ADDONS</p>
        <div className="owndamageplanprices2">
          <div>
            <div
              style={{
                marginTop: "0px",
                lineHeight: "10px",
              }}
            >
              <img src={ticmark} alt="" />
            </div>

            <div
              style={{
                fontSize: "12px",
                lineHeight: "10px",
                marginLeft: "5px",
              }}
            >
              PA Cover
            </div>
          </div>

          <div
            style={{
              fontSize: "12px",
              lineHeight: "10px",
            }}
          >
            ₹ 141
          </div>

          <div
            style={
              {
                // fontSize: "16px",
                // lineHeight: "12px"
                // fontWeight: "600"
              }
            }
          >
            Net Premium
          </div>

          <div className="pricetables">- ₹ {"4,049"}</div>
          <div className="pricetables">GST</div>
          <div className="pricetables">₹ 729</div>
        </div>

        <hr
          style={{
            width: "90%",
            margin: "auto",
            color: "#e9eaf2",
          }}
        />

        <div className="owndamageplanfinalprice">
          <div className="pricetables">Total</div>
          <div className="pricetables">₹ 4,778</div>
        </div>
      </div>
    );
}

