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
  width: 35%;
  height: 80%;
  left: 32.5%;
  top: 5%;
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
  font-size : 1.15rem;
  background-color: #d8f6e4;
  border-radius: 15px;
  cursor: pointer;
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
      <ContentDom></ContentDom>
      <OkButton onClick={()=>{props.setNotifyModalOpen(false)}}>확인</OkButton>
    </NotifyModalDom>
  );
}

export default NotifyModal