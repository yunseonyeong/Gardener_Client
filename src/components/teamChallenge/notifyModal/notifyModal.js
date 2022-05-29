import React from 'react';
import styled from 'styled-components';
import { FaAppleAlt } from "react-icons/fa";



const NotifyModalDom = styled.div`
  z-index: 3;
  position: absolute;
  background: #b9df89;
  border : 2px solid #D4D4D4;
  box-shadow: 3px 3px 3px 5px #D4D4D4;
  border-radius: 20px;
  width: 30%;
  height: 60%;
  left: 35%;
  top: 8%;
  display: flex;
  flex-direction: column;
  font-family: 'dungeunmo';
  align-items: center;
`;

const NotifyModalTitleDom = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;

`;

const Title = styled.div`
  margin-top: 20%;
  flex-basis: 15%;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b4b4b;
`;

const ChallengeName = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  flex-basis: 15%;
  color : white;
`;

const ContentDom = styled.div`
  flex-basis : 65%;
`;

const OkButton = styled.div`
  width: 15%;
  flex-basis: 8%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 1.15rem;
  background-color: #d8f6e4;
  border-radius: 15px;
  &:hover {
    background-color: #b3f5cd;
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 0.9rem;
  line-height: 1.3rem;
`;


const NotifyModal = (props) => {
  return (
    <NotifyModalDom>
      <NotifyModalTitleDom>
        <Title>
          <FaAppleAlt color="#FF593C" />
          &nbsp;챌린지 소개&nbsp;
          <FaAppleAlt color="#FF593C" />
        </Title>
        <ChallengeName>{props.challengeData.name}</ChallengeName>
      </NotifyModalTitleDom>
      <ContentDom>
        <ContentBox>
          🤍{props.challengeData.name}🤍에 가입하신 것을 환영합니다.
          <br />
          <br />
          저희 🤍{props.challengeData.name}🤍 는 중앙대학교 학생들로 구성된{" "}
          <br />
          알고리즘 커밋 챌린지 팀입니다. <br />
          <br />
          매주 금요일 1시간 동안 <br />
          타임어택 챌린지 이벤트가 진행되고 있습니다. <br />
          <br />
          이벤트 시간 내에 알고리즘 문제를 풀어 커밋하시면
          <br /> 커밋 경험치를 2배 드리는 이벤트입니다. <br />
          많은 참여 바랍니다. <br />
          <br />
          {props.challengeData.name} 파이팅 ❗❗
        </ContentBox>
      </ContentDom>
      <OkButton
        onClick={() => {
          props.setNotifyModalOpen(false);
        }}
      >
        확인
      </OkButton>
    </NotifyModalDom>
  );
}

export default NotifyModal