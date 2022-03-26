import getImgUrl from "../../../globalLogic";
import LoginBtn from "../button/loginBtn";
import LogoutBtn from "../button/logoutBtn";
import CreateChallengeBtn from "../button/createChallengeBtn";

const BasicNavTop = () => {
  return (
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
  );
}

export default BasicNavTop;