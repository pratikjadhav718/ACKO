import "./dropdownpopup.css";
import search from "./Search.svg";

export const DropDownPopup = ({popup}) => {
    console.log({popup});

    return popup ? (
        <div className="typecarpopup">
        <div className="inputflexdiv">
            <img src={search} alt="" />
            <input type="text" placeholder="Search your car" />
        </div>
        <div className="topsearch">Top search results</div>
        
        <div className="scrolable">
            <hr />
            <div className="option1">
                Bharti AXA General Insurance Company Limited
            </div>

            <hr />
            <div className="option1">
                Cholamandalam MS General Insurance Co. Ltd.
            </div>

            <hr />
            <div className="option1">
                DHFL General Insurance Limited
            </div>

            <hr />
            <div className="option1">
                Edelweiss General Insurance Company Limited
            </div>

            <hr />
            <div className="option1">
                Future General India Insurance Company Limited
            </div>
        </div>
        </div>
    ) : (
        ""
    );
}
