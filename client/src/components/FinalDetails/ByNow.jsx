import "./bynow.css"
import  thamicon  from "./thmb.svg"
export const ByNow = () => {
    return (
        <div className="bynowmaindiv">
            <div>
                <div>₹ 4,778</div>
                <div>Buy Now</div>
            </div>
            <div>
                <img src={thamicon} alt="" />
            </div>
            <div>
                Trusted by 4.45 Crore Indians
            </div>
        </div>
    )
}


