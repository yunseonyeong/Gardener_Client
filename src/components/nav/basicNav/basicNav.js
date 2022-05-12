import React from "react";
import getImgUrl from "../../../globalLogic";
import BasicNavMid from "./basicNavMid";
import BasicNavTop from "./basicNavTop";
import "./basicNav.css";
import "../button/button.css";
import styled from "styled-components";

const BasicNavDom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  font-family: 'Dungeunmo';
`;

const BasicGrassImg = styled.img`
  width:100%;
`;

function Basicnav(){
  return (
    <BasicNavDom>
      <BasicNavTop />
      <BasicNavMid />
      <div className="basicGrass" alt="grass">
        <BasicGrassImg src={getImgUrl("basicgrass")} />
      </div>
    </ BasicNavDom>
  );
}

export default Basicnav;
