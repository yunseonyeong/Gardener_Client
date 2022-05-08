import React from 'react';
import styled from 'styled-components';
import { RiChatHeartLine } from "react-icons/ri";

const TeamIntroductionDom = styled.div`
  display: flex;
  margin: 1%;
  padding: 3% 18% 3% 18%;
  background-color: gray;
  justify-content: space-around;
`;

const TeamProfileImg = styled.img`
  border-radius: 70px;
  height: 70px;
  width: 70px;
`;

const TeamTitle = styled.div`
  font-size: 10px;
  height: 10px;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamProfileMsg = styled.div`
  flex-basis: 20%;
`;

const ButtonDom = styled.div`
  display: flex;
  flex-basis: 15%;
  justify-content: space-evenly;
`;

const MsgButton = styled.div`
  margin: 1%;
  flex-basis: 30%;
  visibility: ${(props) => (props.msg ? "visible" : "hidden")};
`;

const JoinButton = styled.div`
  margin: 1%;
  flex-basis: 30%;
  visibility: ${(props) => (props.join ? "hidden" : "visible")};
`;

const ShareButton = styled.div`
  margin: 1%;
  flex-basis: 30%;
`;


const ChallengeIntro = (props) => {
  return (
    <TeamIntroductionDom>
      <TeamProfileImg src={props.challengeData.profileImgURL}></TeamProfileImg>
      <TeamTitle>{props.challengeData.name}</TeamTitle>
      <TeamProfileMsg>{props.challengeData.introductionMsg}</TeamProfileMsg>
      <ButtonDom>
        <MsgButton msg={props.showMsgBtn}>
          <RiChatHeartLine size={40} />
        </MsgButton>
        <JoinButton join={props.showJoinBtn}>참가하기</JoinButton>
        <ShareButton>URL공유</ShareButton>
      </ButtonDom>
    </TeamIntroductionDom>
  );
}

export default ChallengeIntro;