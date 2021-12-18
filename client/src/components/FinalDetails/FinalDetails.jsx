import style from "./final.details.module.css";
import styled from "styled-components";
import { OwnDamagePlan1 } from "../OwnDamagePlan/OwnDamagePlan1/OwnDamagePlan1"
import { OwnDamagePlan2 } from "../OwnDamagePlan/OwnDamagePlan2/OwnDamagePlan2";
import { Verify } from "./Verify";
const Container = styled.div`
//   background-color: green;
  //height: 400px;
  width: 792px;
  margin: auto;
  margin-top: 64px;
  display: flex;
  grid-gap: 56px;
`;
const InContleft = styled.div`
  background-color: #ffffff;
  height: 400px;
  width: 368px;
  border: 1px solid #dcdee9;
`;
const InContright = styled.div`
  background-color: #ffffff;
  // height: 400px;
  width: 368px;
  // margin-left: 10.9%;
  border: 1px solid #dcdee9;
`;

export const FinalDetails = () => {


    return (
        <div className={style.test123}>

            <Container>
                <InContleft>
                    <Verify />
                </InContleft>

                <InContright>
                    <OwnDamagePlan1 />
                    <OwnDamagePlan2 />
                </InContright>
            </Container>
        </div>
    )
}