import React from 'react'
import style from "./policy.module.css"
import thumbsup from "./thumbsup paper.svg"

function Policy() {
    return (
      <div className={style.policybody} >
        <div style={{fontStyle:"normal",fontWeight:"bolder",fontSize:"18px",lineHeight:"22px",width:"300px"}} >Did you make a claim in last policy period?</div>
        <div style={{marginTop:"40px"}} >
          <button>Yes</button>
          <button style={{marginLeft:"20px"}} >No</button>
            </div>
            <div className={style.policyflexdiv} >
                <img src={thumbsup} alt='' />
                <p>You can get amzing discounts basis your claim history</p>
            </div>
      </div>
    );
}

export default Policy
