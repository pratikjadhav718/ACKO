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









// <div className={style.btnbuynowdiv}>
//                       <div>1</div>
//                       <div>2</div>
//                       <div>3</div>
//                     </div>



// .btnbuynowdiv {
//     margin-top: 42px;
//     display: grid;
//     grid-template-columns: auto auto auto;
// }