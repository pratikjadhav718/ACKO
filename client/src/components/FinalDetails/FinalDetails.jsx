import style from "./final.details.module.css";
import styled from "styled-components";
import { OwnDamagePlan1 } from "../OwnDamagePlan/OwnDamagePlan1/OwnDamagePlan1"
import { OwnDamagePlan2 } from "../OwnDamagePlan/OwnDamagePlan2/OwnDamagePlan2";
import { Verify } from "./Verify";
import Header from "../Header/Header";
import { Offers } from "./Offers";
import whatsupicon from "./whatsup.svg";
import { ByNow } from "./ByNow";

const Container = styled.div`
  // background-color: green;
  //height: 400px;
  width: 792px;
  margin: auto;
  margin-top: 64px;
  display: flex;
  grid-gap: 56px;
`;
const InContleft = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 368px;
  // border: 1px solid #dcdee9;
`;
const InContright = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 368px;
  // margin-left: 10.9%;
  // border: 1px solid #dcdee9;
`;

export const FinalDetails = () => {


    return (
        <div className={style.test123}>
            <Header />
            <Container>
                <InContleft>
                    <Verify />
                    <hr style={{
                      color: "#e9eaf2",
                      marginTop:"40px"
                    }}/>
                    <div className={style.updatesonwhatsup}>
                        <div>
                          <img src={whatsupicon} alt="" />
                        </div>
                        <div>
                            Get policy updates on WhatsApp
                        </div>
                        <div>
                          <input type="checkbox" checked/>
                        </div>
                    </div>
                </InContleft>

                <InContright>
                    <OwnDamagePlan1 />
                    <OwnDamagePlan2 />
                    <Offers />
                </InContright>
            </Container>
            <ByNow />
        </div>
    )
}