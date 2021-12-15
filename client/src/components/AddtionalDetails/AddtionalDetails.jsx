import Header from "../Header/Header";
import style from "./addtional.details.module.css";

export const AddtionalDetails = () => {
    return (
        <div className={style.maindiv}>

            <Header />

            <div className={style.flexdiv}>
                <div>
                    <div className={style.detailsmaindiv}>
                        <div className={style.topdottedline}>
                            <hr className={style.dottedline}/>
                        </div>
                        <div className={style.title}>
                            Answer a few more questions
                        </div>
                        <div className={style.titlediscription}>
                            We ask for minimum information required to issue your policy. You can always add additional details like nominee details & address post policy issuance
                        </div>

                        <div className={style.fullnamediv}>
                            <input type="text" placeholder="Full Name" className={style.nameinput}/>
                        </div>

                        <div className={style.emaildiv}>
                            <input type="email" placeholder="Email" className={style.emailinput}/>
                        </div>

                        <div className={style.mobilediv}>
                            <input type="number" placeholder="Mobile Number" className={style.mobilinput}/>
                        </div>

                        <div className={style.dropdowndiv}>
                            <select name="test" id="insurance" className={style.dropdown}>
                                <option value="" disabled selected>Previous Insurer</option>
                                <option value="Bharti AXA General Insurance Company Limited">Bharti AXA General Insurance Company Limited</option>
                                <option value="Cholamandalam MS General Insurance Co. Ltd.">Cholamandalam MS General Insurance Co. Ltd.</option>
                                <option value="DHFL General Insurance Limited">DHFL General Insurance Limited</option>
                                <option value="Edelweiss General Insurance Company Limited">Edelweiss General Insurance Company Limited</option>
                                <option value="Future General India Insurance Company Limited">Future General India Insurance Company Limited</option>
                            </select>
                        </div>

                    </div>

                    <div className={style.noticediv}>

                    </div>

                    <div className={style.termsandconditions}>
                        <p> By tapping on continue I declare that i have provided correct details and have read Acko’s T&C.</p>
                    </div>

                    <div className={style.continuebtndiv}>
                        <button className={style.continuebtn}>Continue</button>
                    </div>
                </div>

                <div>
                    <div className={style.owndamageplandiv1}>

                    </div>

                    <div className={style.owndamageplandiv2}>

                    </div>
                </div>
            </div>

            <div>
                {/* <div className={style.noticediv}>

                </div> */}
                {/* <hr className="hrclass" /> */}
                {/* <div className={style.termsandconditions}>
                <p> By tapping on continue I declare that i have provided correct details and have read Acko’s T&C.</p>
                </div> */}

                {/* <div className={style.continuebtndiv}>
                    <button className={style.continuebtn}>Continue</button>
                </div> */}
            </div>

        </div>
    )
}
