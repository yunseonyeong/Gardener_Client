import React from "react";
import getImgUrl from "../../../globalLogic";
import BasicNavMid from "./basicNavMid";
import BasicNavTop from "./basicNavTop";
import "./basicNav.css";
import "../button/button.css";
import styled from "styled-components";

const BlueNavDom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c0e8ff;
`;
const BasicGrassDom = styled.div`
  
`;
const BasicGrassImg = styled.img`
  width:100%;
  padding-top:2%;
`;

function Bluenav(){
  return (
    <BlueNavDom>
      <BasicNavTop />
      <BasicNavMid />
      <BasicGrassDom>
        <BasicGrassImg src={getImgUrl("basicgrass")} />
      </BasicGrassDom>
    </ BlueNavDom>
  );
}

export default Bluenav;
