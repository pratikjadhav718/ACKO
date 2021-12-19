import "./verify.css";
import { TopProgressBar } from "../AddtionalDetails/TopProgressBar";
import { useEffect, useState } from "react";
import axios from "axios";

export const Verify = () => {

    const id = localStorage.getItem("ackoid");

    const idv = localStorage.getItem("currentIDV");

    const [data,setData]=useState("")

    const getData =async () => {
        // const { data } = await axios.get(`http://localhost:8080/cars/${id}`);
         const { data } = await axios.get(
           `https://acko.herokuapp.com/cars/${id}`
         );
        setData(data)
    }

    useEffect(() => {
       getData() 
    }, [])
    
    console.log(data);

    return (
        <div className="verifymaindiv">
            <div>
                <TopProgressBar />
            </div>
            <div>
                <p >
                    Verify all details
                </p>
            </div>
            <div>
                <p>
                    All the information below will show up on your policy. Make sure that everything (espicially highlighted with    ) is correct for a hassle free experience
                </p>
            </div>
            <div>
                <p>
                    Car owner Details
                </p>
            </div>

            <div className="carownerdetails">

                <div>
                    Full Name (As per RC copy)
                </div>
                <div>
                    {data.username}
                </div>

                <div>
                    Email
                </div>
                <div>
                    {data.email}
                </div>

                <div>
                    Mobile
                </div>
                <div>
                   {data.mobile}
                </div>

            </div>

            <div>
                <p>
                    Car Details
                </p>
            </div>

            <div className="detailsofcar">
                
                <div>
                    Car Number
                </div>
                <div>
                    {data.number}
                </div>

                <div>
                    Make Model
                </div>
                <div>
                   {data.name}
                </div>

                <div>
                    Variant
                </div>
                <div>
                    {data.gear}
                </div>

                <div>
                    Fuel Type
                </div>
                <div>
                   {data.fuel}
                </div>

                <div>
                    Insured Value
                </div>
                <div>
                    IDV : {idv} Lakhs
                </div>

                <div>
                    Purchase Year
                </div>
                <div>
                    {data.year}
                </div>

                <div>
                    PA Cover
                </div>
                <div>
                    Included
                </div>

            </div>

        </div>
    )
}