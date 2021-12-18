import React from 'react';
import logo from "./images/Logo.png";

const Nav2 = () => {
    return (
        <div>
            <div className="nav_collapse">

                <div className='col2 col1'>
                    <p>Manage your policy</p>
                    <button classname="collapse_login">login</button>
                </div>
                <hr></hr>

                <div className='col2'>
                    <p>Raise a claim</p>
                    <p>renew policy</p>
                    <p>Help</p>
                </div>
                <hr></hr>

                <div className='col2'>
                    <p>Have a partner issued policy</p>
                    <button classname="collapse_claim">claim</button>
                </div>
                <hr></hr>

                <div className='col2'>
                   products
                    <p>Car & taxi</p>
                    <p>Bike</p>
                    <p>Health</p>
                    <p>Electronics</p>
                </div>
                <hr></hr>

                <div className='col2'>
                    <p style={{fontSize:"smaller", fontWeight:"normal"}}>Trade logo displayed above belongs to ACKO Technology & Services Pvt Ltd and used by ACKO General insurance Limited under License.</p>
                    <p style={{fontSize:"smaller", fontWeight:"normal"}}>For more details on risk factors, terms, conditions and exclusions, please read the policy wordings carefully before concluding a sale.</p>
                </div>

                </div>
         
        </div>
    )
}

export default Nav2
