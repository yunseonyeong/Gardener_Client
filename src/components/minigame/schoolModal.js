import React, { useState } from "react";
import styled from "styled-components";

const ModalDom = styled.div`
  position: absolute;
  width: 350px;
  height: 163px;
  background-color: #ffad9e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 39%;
  bottom: 40%;
  color: white;
  z-index: 2;
  box-shadow: 2px 2px 2px 2px #ededed;
  padding-top: 2%;
`;

const CloseModalBtn = styled.div`
  display: flex;
  width: 75px;
  height: 35px;
  position: absolute;
  right: 33%;
  bottom: 10%;
  z-index: 2;
  background-color: #ff7056;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const EndModalBtn = styled.div`
  display: flex;
  width: 60px;
  height: 35px;
  position: absolute;
  right: 12%;
  bottom: 10%;
  z-index: 2;
  color: white;
  cursor: pointer;
  background-color: #51c15f;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-basis: 9%;
  margin-top: 4%;
`;

const Title = styled.div`
  font-family: "dungeunmo";
  font-weight: 400;
  font-size: 1.1rem;
  padding-bottom: 3%;
`;

const SchoolInput = styled.input`
  width: 70%;
  height: 40px;
  border: 0.5px none;
  border-radius: 15px;
`;

const SubTitle = styled.div`
  font-family: "dungeunmo";
  font-weight: 200;
  font-size: 0.8rem;
  padding-bottom: 3%;
  margin-bottom: 2%;
  color: gray;
`;

const SchoolModal = (props) => {
  const [school, setschool] = useState("");
  const onChange = (event) => {
    setschool(event.target.value);
  };

  return (
    <ModalDom>
      <Title>학교 를 입력해주세요.</Title>
      <SubTitle>ex)ㅇㅇ대학교</SubTitle>
      <SchoolInput onChange={onChange} value={school} />
      <BtnWrapper>
        <CloseModalBtn
          onClick={() => {
            props.setModalOpen(false);
          }}
        >
          건너뛰기
        </CloseModalBtn>
        <EndModalBtn onClick={()=>{
          props.setGameModalOpen(true);
          props.setSchoolModalOpen(false);
          }}>완료</EndModalBtn>
      </BtnWrapper>
    </ModalDom>
  );
};

export default SchoolModal;
