import React from "react";
import getImgUrl from "../../../globalLogic";
import BasicNavMid from "./basicNavMid";
import BasicNavTop from "./basicNavTop";
import "./basicNav.css";
import "../button/button.css";

function basicNav(){
  return (
    <div className="basicNav">
      <BasicNavTop />
      <BasicNavMid />
      <div className="basicGrass" alt="grass">
        <img src={getImgUrl("basicgrass")} />
      </div>
    </div>
  );
}

export default basicNav;
