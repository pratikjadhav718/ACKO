import "./bynow.css";
import thamicon from "./thmb.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const ByNow = () => {
  const id = localStorage.getItem("ackoid");

  const [data, setData] = useState("");

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8080/cars/${id}`);
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bynowmaindiv">
      <Link
        style={{ textDecoration: "none", width: "150px", heigth: "200px" }}
        to="/cardPayment"
      >
        <div>
          <div>₹ {data.total}</div>
          <div>Buy Now</div>
        </div>
      </Link>
      <div>
        <img src={thamicon} alt="" />
      </div>
      <div>Trusted by 4.45 Crore Indians</div>
    </div>
  );
};
