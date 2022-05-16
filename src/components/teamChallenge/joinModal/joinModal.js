import React from 'react';
import styled from 'styled-components';


const JoinModalDom = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  background-color: #c5eaff;
  z-index: 2;
  right: 17%;
  bottom: 55%;
  font-family: "dungeunmo";
  box-shadow: 0.5px 0.5px 0.5px 0.5px #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const ExitAcceptButton = styled.div`
  background-color : ${(props) => props.bgcolor? props.bgcolor : "#4cb2eb" };
  color : white;
  width: 15%;
  height: 100%;
  border-radius: 5px;
  left: 95.5%;
  padding: 1%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  margin: 1%;
  align-items: center;
  cursor: pointer;
  flex-basis: 20%;
`;

const BtnWrapper = styled.div`
  display: flex;
  width : 100%;
  justify-content: center;
  flex-basis: 12%;
  margin-top : 4%;

`;

const JoinMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width : 90%;
  flex-basis: 18%;
`;

const JoinTitle = styled.div`
  width: 95%;
  flex-basis: 20%;
  color: #005c8f;
  display: flex;
  margin : 2% 2% 0% 2%;
  justify-content: center;
  font-size: 1.3rem;
`;
const JoinModal = (props) => {

  return (
    <JoinModalDom>
      <JoinTitle>챌린지 참가 요청</JoinTitle>
      <JoinMsg>❤{props.challName}❤ 에</JoinMsg>
      <JoinMsg>참가 요청 메시지를 보낼까요?</JoinMsg>
      <BtnWrapper>
        <ExitAcceptButton onClick={props.handleJoinBtn}>취소</ExitAcceptButton>
        <ExitAcceptButton onClick={props.handleAcceptBtn} bgcolor={"#51C15F"}>
          확인
        </ExitAcceptButton>
      </BtnWrapper>
    </JoinModalDom>
  );
}

export default JoinModal