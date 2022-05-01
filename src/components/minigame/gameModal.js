import React, {useState} from 'react';
import styled from 'styled-components';
import miniGameData from '../../data/miniGameData';
import { GrNext, GrPrevious } from "react-icons/gr";

const MinigameDom = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left : 25%;
  top: 15%;
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
`;

const GameQuestion = styled.div`
  width: 84%;
  flex-basis: 15%;
  background-color: #feffe8;
  border-radius:10px;
  font-family: 'jua';
  font-size : 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin : 1%;
  margin-top:4%;
`;

const GameSelection = styled.div`
  width: 80%;
  flex-basis: 65%;
  font-family: "jua";
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin : 1%;
`;

const SelectionItems = styled.div`
  padding : 3% 6%;
  background-color: #feffe8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor : pointer;
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

const QuestionBox = (props) => {
  let id = props.questionId;
  return (
    <>
      {<div>{miniGameData[id-1].title}</div>}
    </>
  );
}
const NextBtn = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  margin : 3%;
  margin-bottom: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'jua';
`;

const ReturnBtn = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  margin: 3%;
  margin-bottom: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
`;

const GameModal = (props) => {
  const [questionId, setQuestionId] = useState(1);
  const handleNextBtn = () => {
    if(questionId < miniGameData.length){
      setQuestionId(questionId + 1);
    }
  }
  const handleReturnBtn = () => {
    if (questionId > 1) {
      setQuestionId(questionId - 1);
    }
  }

  return (
    <MinigameDom>
      <MinigameModal>
        <ExitBtnWrapper>
          <ExitButton onClick={props.handleStartBtn}>X</ExitButton>
        </ExitBtnWrapper>
        <GameQuestion>
          <QuestionBox questionId={questionId}></QuestionBox>
        </GameQuestion>
        <GameSelection>
          {miniGameData[questionId - 1].selection.map((selection) => (
            <SelectionItems>{selection.selection_content}</SelectionItems>
          ))}
        </GameSelection>
        <Btn>
          <ReturnBtn onClick={handleReturnBtn}><GrPrevious /></ReturnBtn>
          <NextBtn onClick={handleNextBtn}>
            <GrNext/>
          </NextBtn>
        </Btn>
      </MinigameModal>
    </MinigameDom>
  );
}

export default GameModal;