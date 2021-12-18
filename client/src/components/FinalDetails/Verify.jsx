import "./verify.css";
import { TopProgressBar } from "../AddtionalDetails/TopProgressBar";

export const Verify = () => {
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
                    Jaysinth JOSEPH
                </div>

                <div>
                    Email
                </div>
                <div>
                    jaysinthjoseph7@gmail.com
                </div>

                <div>
                    Mobile
                </div>
                <div>
                    8850645962
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
                    MH04KL5359
                </div>

                <div>
                    Make Model
                </div>
                <div>
                    Ford Ecosport
                </div>

                <div>
                    Variant
                </div>
                <div>
                    Titanium AT
                </div>

                <div>
                    Fuel Type
                </div>
                <div>
                    Petrol
                </div>

                <div>
                    Insured Value
                </div>
                <div>
                    IDV : 6.65 Lakh
                </div>

                <div>
                    Purchase Year
                </div>
                <div>
                    2020
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