import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import miniGameData from '../../data/miniGameData';
import { GrNext, GrPrevious } from "react-icons/gr";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import getImgUrl from '../../globalLogic';

const MinigameDom = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left : 20.5%;
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
  box-shadow: 3px 3px 3px 3px #E5E5E5;
`;

const GameQuestion = styled.div`
  width: 84%;
  flex-basis: 15%;
  background-color: #ffc7ad;
  border-radius: 10px;
  font-family: "jua";
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
  margin-top: 4%;
  box-shadow: 1px 1px 1px 1px #d6d6d6;
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
  margin: 1%;
`;

const SelectionItems = styled.div`
  padding: 3% 6%;
  background-color: ${(props) =>
    props.selected == props.selection_id ? "#FCD3C1" : "#feffe8"};
  border: ${(props) =>
    props.selected == props.selection_id ? "2px dotted gray" : null};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


const ExitBtnWrapper = styled.div`
  width : 100%;
  flex-basis: 6%;
`;

const ExitButton = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  left : 95.5%;
  padding : 1%;
  font-size: 23px;
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


const StyledBtn = styled.div`
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


const Btn = styled.div`
  display: flex;
`;

const ReturnBtn = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: #ffc5ab;
  color: white;
  font-family: "jua";
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.9s, color 0.3;
  :hover {
    width: 126px;
    height: 126px;
    background-color: #ffb999;
    box-shadow: 5px 5px 5px 5px #ffefc7;
  }
`;

const ResultBtn = styled(ReturnBtn)`

`;

const LastBtn = styled.div`
  display: flex;
  width : 30%;
  justify-content: space-between;
  align-items: center;
`;

const move = keyframes`
  0%{-webkit-transform:rotate(0deg);}
  100%{-webkit-transform:rotate(360deg);} 
`;

const Loader = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  border: 4px solid rgba(255, 255, 255, 0.7);

  top: 32%;
  /* top: -webkit-calc(50% - 43px);
  top: calc(50% - 43px); */
  left: 0%;
  /* left: -webkit-calc(50% - 43px);
  left: calc(50% - 43px); */

  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;

  ::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 20px;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: #ffc5ab;
  }

  animation: ${move} 2s linear infinite;
`;

const LoadTitle = styled.div`
  color: gray;
  width: 100%;
  height: 30px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharLogoDom = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 15%;
  margin-top : 7%;
`;

const TwoSelection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30%;
`;

const Selection1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  width: 37%;
  color: #4a4a4a;
  height: 100%;
`;

const FiveSelection = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  background-color: #fffae1;
`;

const Answer1 = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${(props) =>
    props.selected == props.selection_id ? "#FFC7AD" : "#FFFAE1"};
  border: solid 1px #d2d2d2;
  cursor : pointer;
`;

const ArrowDom = styled.div`
  display : flex;
  justify-content: space-between;
  width:100%;
  height : 2%;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
  height : 100%;
`;

const GameModal = (props) => {
  const [questionId, setQuestionId] = useState(1);
  const [selected, setSelected] = useState(miniGameData[0].selected);
  const [showResult, setShowResult] = useState(false);

  const handleSelected = (selection_id) => {
    setSelected(selection_id);
  }

  const handleNextBtn = () => {
    if(questionId <= miniGameData.length){
      setQuestionId(questionId + 1);
      console.log(questionId);
      if(questionId < miniGameData.length){
        setSelected(1);
      }

    }
  }
  const handleReturnBtn = () => {
    if (questionId > 1) {
      setQuestionId(questionId - 1);
      setSelected(1);
    }
  }

  const handleResultBtn = () => {
    setShowResult(true);
  }

  let arrow_arr = [1,2,3,4];
  let selection_arr = [1,2,3,4,5];

  return (
    <MinigameDom>
      <MinigameModal>
        <ExitBtnWrapper>
          <ExitButton onClick={props.handleStartBtn}>X</ExitButton>
        </ExitBtnWrapper>
        {showResult ? (
          <>
            <Loader />
            <LoadTitle>Loading ...</LoadTitle>
          </>
        ) : questionId == miniGameData.length + 1 ? (
          <>
            <CharLogoDom>
              <Logo src={getImgUrl("girlLogo")} />
              <Logo src={getImgUrl("boyLogo")} />
            </CharLogoDom>
            <LastBtn>
              <ReturnBtn onClick={handleReturnBtn}>돌아가기</ReturnBtn>
              <ResultBtn onClick={handleResultBtn}>결과보기</ResultBtn>
            </LastBtn>
          </>
        ) : (
          <>
            <GameQuestion>
              <QuestionBox questionId={questionId}></QuestionBox>
            </GameQuestion>
            {questionId < 6 ? (
              <GameSelection>
              <TwoSelection>
                <Selection1>
                  {miniGameData[questionId - 1].selection[0].selection_content}
                </Selection1>
                <Selection1>
                  {miniGameData[questionId - 1].selection[1].selection_content}
                </Selection1>
              </TwoSelection>
              <ArrowDom>
                <Arrow>
                  {arrow_arr.map(() => {
                    return <BiLeftArrow color={"#B8B8B8"} />;
                  })}
                </Arrow>
                <Arrow>
                  {arrow_arr.map(() => {
                    return <BiRightArrow color={"#B8B8B8"} />;
                  })}
                </Arrow>
              </ArrowDom>
              <FiveSelection>
                {
                  selection_arr.map((id)=> {
                    return  <Answer1
                  onClick={() => {
                    handleSelected(id);
                    console.log(selected);
                  }}
                  selected={selected}
                  selection_id={id}
                ></Answer1>
                  })
                }
              </FiveSelection>
            </GameSelection>
            ):
            (<GameSelection>{miniGameData[questionId - 1].selection.map((selection) => (
                <SelectionItems
                  onClick={() => {
                    handleSelected(selection.selection_id);
                  }}
                  selected={selected}
                  selection_id={selection.selection_id}
                >
                  {selection.selection_content}
                </SelectionItems>
              ))}</GameSelection>)
            
            }
            
            <Btn>
              <StyledBtn onClick={handleReturnBtn}>
                <GrPrevious />
              </StyledBtn>

              <StyledBtn onClick={handleNextBtn}>
                <GrNext />
              </StyledBtn>
            </Btn>
          </>
        )}
      </MinigameModal>
    </MinigameDom>
  );}


export default GameModal;