import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";

const MessageModalDom = styled.div`
  position: absolute;
  width: 250px;
  height: 200px;
  background-color: #c7edff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 23%;
  bottom: 50%;
  z-index: 2;
  box-shadow: 2px 2px 2px 2px #ededed;
`;

const CloseModalBtn = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  position: absolute;
  right: 30%;
  bottom: 10%;
  z-index: 2;
  background-color: #33ffff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const SendModalBtn = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  position: absolute;
  right: 5%;
  bottom: 10%;
  z-index: 2;
  background-color: #99ff99;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-basis: 12%;
  padding-top: 3%;
  margin-top: 4%;
  font-family: "dungeunmo";
  font-size: 0.8rem;
`;

const MessageField = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3%;
  justify-content: center;
  font-family: "dungeunmo";
  font-weight: 400;
  font-size: 1rem;
`;

const InputField = styled.textarea`
  margin-top: 1%;
  width: 70%;
  height: 100px;
  font-family: 'dungeunmo';
`;

const MessageModal = (props) => {

  const [value, setValue] = useState("'안녕하세요 tngur1101님   '폭신한 라일락' rineeee 입니다.'");

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },[]);
  
  return (
    <MessageModalDom>
      <MessageField>쪽지 보내기</MessageField>
      <MessageField>
        <InputField
          value={value}
          onChange={onChange}
        />
      </MessageField>
      <BtnWrapper>
        <CloseModalBtn
          onClick={() => {
            props.setMessageModalOpen(false);
          }}
        >
          취소
        </CloseModalBtn>
        <SendModalBtn
          onClick={() => {
            props.setMessageModalOpen(false);
          }}
        >
          보내기
        </SendModalBtn>
      </BtnWrapper>
    </MessageModalDom>
  );
};

export default MessageModal;
