import "./owndamageplan2.css";

export const OwnDamagePlan2 = () => {
    return (
        <div className="owndamageplandiv22">
            <div className="owndamagetopdiv">
                    <p className="owndamageplan2title">Own Damage Plan</p>
                    <p className="owndamageplan2subtitle">Hide Premium Breakup</p>
            </div>
            <div className="owndamageplanprices1">
                <div>
                    Own Damage Premium
                </div>
                <div>₹ 3,650</div>

                <div>NCB Discount</div>
                <div>- ₹ {"5454"}</div>
                <div>Consumables Premium</div>
                <div>₹ 141</div>
            </div>
            <p style={{
                marginLeft:"10px",
                fontWeight:"700"
            }}>
                ADDONS
            </p>
            <div className="owndamageplanprices2">
                <div style={{
                    fontSize: "12px",
                    lineHeight: "10px"
                }}>
                    PA Cover
                </div>

                <div style={{
                    fontSize: "12px",
                    lineHeight: "10px"
                }}>
                    ₹ 141
                </div>

                <div style={{
                    fontSize: "16px",
                    // lineHeight: "12px"
                    fontWeight: "600"
                }}>
                    Net Premium
                </div>

                <div>- ₹ {"4,049"}</div>
                <div>GST</div>
                <div>₹ 729</div>
            </div>
        </div>
    )
}

