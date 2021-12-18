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
        </div>
    )
}