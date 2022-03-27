import getImgUrl from "../../../globalLogic";
import LoginBtn from "../button/loginBtn";
import LogoutBtn from "../button/logoutBtn";
import CreateChallengeBtn from "../button/createChallengeBtn";
import styled from 'styled-components';

const BasicNavTopDom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LogoDom = styled.div`
  display: flex;
  flex-basis: 10%;
`;
const Logo = () => {
  return (
    <LogoDom>
      <div className="logoimg" alt="logo">
        <img src={getImgUrl("logo")} />
      </div>
      <div className="logotitle" alt="정원사">
        <img src={getImgUrl("logotitle")} />
      </div>
    </LogoDom>
  );
}

const BasicNavTop = () => {
  return (
    <BasicNavTopDom>
      <Logo />
      <div className="buttons">
        <LoginBtn />
        <LogoutBtn />
        <CreateChallengeBtn />
      </div>
    </ BasicNavTopDom>
  );
}

export default BasicNavTop;