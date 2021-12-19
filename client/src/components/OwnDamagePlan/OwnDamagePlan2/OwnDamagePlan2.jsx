import axios from "axios";
import { useEffect, useState } from "react";
import "./owndamageplan2.css";
import ticmark from "./ticmark.svg"
export const OwnDamagePlan2 = () => {

  


  // const [data, setData] = useState("");



  const conspre = 141
  


    const [paymentValues, setPaymentValues] = useState({
      netPreminum: "",
      gst: "",
      total: "",
      ncbDiscountAmount: "",
      paCover:""
    });
  
  // const getData =async () => {
  //   const { data } = await axios.get(`http://localhost:8080/cars/${id1}`);
  //   setData(data)
  //   console.log(data.ncbDiscountAmount);
  // }
// console.log(data);
  
  useEffect(() => {
    try {
      let id = localStorage.getItem("ackoUserId");
      const res = axios.get(`http://localhost:8080/user/${id}`).then((res) => {
        // console.log(res.data);
      let  data = res.data;
        
        // setData(data)
        setPaymentValues({
          netPreminum: data.premium.toFixed(0),
          gst: Math.round(
            (data.premium - data.ncbDiscountAmount + 141 + data.paCover) *
              (15 / 100)
          ),
          total: Math.round(
            data.premium -
              data.ncbDiscountAmount +
              141 +
              data.paCover +
              (data.premium - data.ncbDiscountAmount + 141 + data.paCover) *
                (15 / 100)
          ),
          ncbDiscountAmount: data.ncbDiscountAmount,
          paCover: data.paCover,
        });
      })
    
    } catch (err) {
      console.log(err.message);
    }
  }, [paymentValues]);
 localStorage.setItem("totalacko", paymentValues.total);
    return (
      <div className="owndamageplandiv22">
        <div className="owndamagetopdiv">
          <p className="owndamageplan2title">Own Damage Plan</p>
          <p className="owndamageplan2subtitle">Hide Premium Breakup</p>
        </div>
        <div className="owndamageplanprices1">
          <div>Own Damage Premium</div>
          <div>₹ {paymentValues.netPreminum} </div>

          <div>NCB Discount</div>
          <div style={{ color: "green" }}>
            - ₹ {paymentValues.ncbDiscountAmount}
          </div>
          <div>Consumables Premium</div>
          <div>₹ {conspre}</div>
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
            ₹ {paymentValues.paCover}
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

          <div className="pricetables"> ₹ {paymentValues.netPreminum}</div>
          <div className="pricetables">GST</div>
          <div className="pricetables">₹ {paymentValues.gst}</div>
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
          <div className="pricetables">₹ {paymentValues.total}</div>
        </div>
      </div>
    );
}

