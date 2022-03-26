import React from "react";
import getImgUrl from "../../../globalLogic";

function basicNav(){
  return (
    <div className="Basicnav">
      <img className="title" alt="gardener" src={getImgUrl("gardener")} />
    </div>
  );
}

export default basicNav;
