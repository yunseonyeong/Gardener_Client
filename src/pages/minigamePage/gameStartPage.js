import React, {useEffect, useState} from "react";
import styled from "styled-components";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import getImgUrl from "../../globalLogic";
import GameModal from "../../components/minigame/gameModal";
import SchoolModal from "../../components/minigame/schoolModal";

const MiniGamePageDom = styled.div`
  background-color: #f0fcf8;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100%;
  font-family: "dungeunmo";
`;
const LogoTitleDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
`;

const CharLogoDom = styled.div`
  display: flex;
  justify-content: center;

`;

const Logo = styled.img`
  max-width: 10%;
`;

const StartButtonDom = styled.div`
  display: flex;
  justify-content: center;
`;

const StartButton = styled.div`
  font-family: "dungeunmo";
  background-color: #ff9067;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  margin-top: 1%;
  &:hover {
    background-color: #ff7f50;
    cursor: pointer;
  }
`;

const GrassFooter = styled.img`
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 10%;
`;

const LoginButtonDom = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.div`
  font-family: "dungeunmo";
  background-color: #ffa595;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  margin-top: 1%;
  &:hover {
    background-color: #ffc4b9;
    cursor: pointer;
  }
`;


const GameStartPage = () => {
  
  const [gameModalOpen, setGameModalOpen] = useState(false);
  const [schoolModalOpen, setSchoolModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const handleStartBtn = () => {
    setSchoolModalOpen(!schoolModalOpen);
    // setGameModalOpen(!gameModalOpen);
  }


  useEffect(()=>{
    const getUser = async () =>{
      fetch("http://localhost:8000/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response=>{
        if(response.status === 200) return response.json();
        throw new Error("authentication has been failed");
      }).then(resObject=>{
          setUser(resObject.user)
      }).catch(err=>{
        console.log(err);
      })
    }; 
    getUser();
  },[])

  console.log(user);

  useEffect(()=>{
    if(user!==null){
      setIsVisible(false);
    }
  },[user]);

  const github = () => {
    window.open("http://localhost:8000/auth/github", "_self")
  }

  return (
    <MiniGamePageDom>
      <BasicNavTop />
      <LogoTitleDom>
        <CharLogoDom>
          <Logo src={getImgUrl("girlLogo")} />
          <Logo src={getImgUrl("boyLogo")} />
        </CharLogoDom>
        <img src={getImgUrl("SearchMidTitle")} />
      </LogoTitleDom>
      <StartButtonDom>
        <StartButton onClick={handleStartBtn}>
          개발자 성향 테스트 시작하기
        </StartButton>
      </StartButtonDom>
      <LoginButtonDom>
          {isVisible ? <LoginButton onClick ={github}>
            Github로 로그인하기
          </LoginButton>:null}
      </LoginButtonDom>
      <GrassFooter src={getImgUrl("basicgrass")} />

      {gameModalOpen ? (
        <GameModal
          handleStartBtn={handleStartBtn}
          CharLogoDom = {CharLogoDom}
        >

        </GameModal>
      ) : null}
      {
        schoolModalOpen ? (
          <SchoolModal setSchoolModalOpen={setSchoolModalOpen} setGameModalOpen={setGameModalOpen} />
        ):null
      }
    </MiniGamePageDom>
  );
}

export default GameStartPage;