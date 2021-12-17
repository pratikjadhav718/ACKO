import "./owndamageplan1.css";
import ecosport from "./ecosport.png"

export const OwnDamagePlan1 = () => {
    return (
        <div className="owndamageplandiv11">
                <div className="oneone">
                    <p className="titleOne">Own Damage Plan</p>
                    <p className="yourcarname">For your Ford Ecosport 2020</p>
                </div>
                <div className="twotwo">
                    <img 
                        style={
                            {
                                width: "135px",
                                height: "60px",
                            }
                        }
                        src={ecosport}
                        alt=""
                     />
                </div>
        </div>
    )
}