import React, {useState} from "react";
import styled from "styled-components";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import getImgUrl from "../../globalLogic";
import GameModal from "../../components/minigame/gameModal";


const MiniGamePageDom = styled.div`
  background-color: #f0fcf8;
  display : flex;
  flex-direction: column;
  height : 100vh;
  min-height: 100%;
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
  background-color: #51c15f;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6%;
  margin-top: 1%;
  &:hover {
    background-color: #3aa247;
    cursor : pointer;
  }
`;

const GrassFooter = styled.img`
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 10%;
`;



const GameStartPage = () => {

  const [gameModalOpen, setGameModalOpen] = useState(false);
  const handleStartBtn = () => {
    setGameModalOpen(!gameModalOpen);
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

      <GrassFooter src={getImgUrl("basicgrass")} />

      {gameModalOpen ? (
        <GameModal
          handleStartBtn={handleStartBtn}
          CharLogoDom = {CharLogoDom}
        >

        </GameModal>
      ) : null}
    </MiniGamePageDom>
  );
}

export default GameStartPage;