import React from "react";
import getImgUrl from "../../../globalLogic";
import LoginBtn from '../button/loginBtn';
import LogoutBtn from '../button/logoutBtn';
import CreateChallengeBtn from '../button/createChallengeBtn';
import './basicNav.css';

function basicNav(){
  return (
    <div className="basicNav">
      <div className="basicNavTop">
        <div className="logo">
          <div className="logoimg" alt="logo">
            <img src={getImgUrl("logo")} />
          </div>
          <div className="logotitle" alt="정원사">
            <img src={getImgUrl("logotitle")} />
          </div>
        </div>
        <div className="buttons">
          <LoginBtn />
          <LogoutBtn />
          <CreateChallengeBtn />
        </div>
      </div>
      <div className="basicNavMid">
        <div className="title" alt="gardener">
          <img src={getImgUrl("gardener")} />
        </div>
        <div className="sectitle" alt="nopainnogarden">
          <img src={getImgUrl("basicsubtitle")} />
        </div>
      </div>
      <div className="basicGrass" alt="grass">
        <img src={getImgUrl("basicgrass")} />
      </div>
    </div>
  );
}

export default basicNav;
