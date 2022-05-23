import React from 'react';
import styled from 'styled-components';

const RepoUrlModalDom = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  background-color: #c7edff;
  z-index: 2;
  right: 17%;
  bottom: 60%;
  font-family: "dungeunmo";
  box-shadow: 0.5px 0.5px 0.5px 0.5px #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ExitYesButton = styled.div`
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#4cb2eb")};
  color: white;
  width: 15%;
  height: 80%;
  border-radius: 5px;
  left: 95.5%;
  padding: 1%;
  font-size: 15px;
  display: flex;
  margin: 0 1% 0 1%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-basis: 20%;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-basis: 7%;
  margin-top: 4%;
`;

const RepoInputDom = styled.div`
  display: flex;
  flex-basis: 30%;
  width : 75%;
`;

const RepoInputBox = styled.input`
  width : 100%;
  
`;

const RepoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  flex-basis: 18%;
  font-size: 1.2rem;
`;

const RepoTitleMsg = styled.div`
  width: 95%;
  flex-basis: 20%;
  color: #005c8f;
  display: flex;
  margin: 2% 2% 0% 2%;
  justify-content: center;
  font-size: 0.9rem;
`;

const RepoUrlModal = (props) => {
  return (
    <RepoUrlModalDom>
      <RepoTitle>🤍 레포지토리 연동 🤍</RepoTitle>
      <RepoTitleMsg>
        챌린지에 연동할 Git <br /> 레포지토리 주소를 입력하세요.
      </RepoTitleMsg>
      <RepoInputDom>
        <RepoInputBox />
      </RepoInputDom>
      <BtnWrapper>
        <ExitYesButton bgcolor={"#51C15F"} onClick={props.handleRepoBtn}>확인</ExitYesButton>
        <ExitYesButton onClick = {()=>{props.setRepoUrlOpen(false)}}>취소</ExitYesButton>
      </BtnWrapper>
    </RepoUrlModalDom>
  );
}

export default RepoUrlModal