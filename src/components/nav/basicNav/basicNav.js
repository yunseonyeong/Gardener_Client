import React from "react";
import getImgUrl from "../../../globalLogic";

function basicNav(props){
  return (
    <div className="Basicnav">
      <img className="title" alt="gardener" src={getImgUrl(props.name)} />
    </div>
  );
}

export default basicNav;
