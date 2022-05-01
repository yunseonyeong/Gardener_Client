import React from 'react';
import styled from 'styled-components';


const MinigameDom = styled.div`
  /* width: 800px;
  height: 800px;
  border-radius: 5px;
  background-color: black;
  position: relative; */
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left : 20%;
  top: 10%;
  max-height: 75%;
`;

const MinigameModal = styled.div`
  width: 900px;
  height: 550px;
  border-radius: 10px;
  background-color: #ffefc7;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const GameQuestion = styled.div`
  width: 80%;
  flex-basis: 15%;
  background-color: #feffe8;
  border-radius:10px;
`;

const GameSelection = styled.div`
  width: 80%;
  flex-basis: 70%;
  background-color: #feffe8;
  border-radius: 10px;
`;

const ExitBtnWrapper = styled.div`
  width : 100%;
  flex-basis: 6%;
`;

const ExitButton = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  left : 95.5%;
  padding : 1%;
  font-size: 20px;
  color : gray;
  cursor : pointer;
`;

const GameModal = (props) => {
  return (
    <MinigameDom>
      <MinigameModal>
        <ExitBtnWrapper>
          <ExitButton onClick={props.handleStartBtn}>X</ExitButton>
        </ExitBtnWrapper>
        <GameQuestion></GameQuestion>
        <GameSelection></GameSelection>
      </MinigameModal>
    </MinigameDom>
  );
}

export default GameModal;