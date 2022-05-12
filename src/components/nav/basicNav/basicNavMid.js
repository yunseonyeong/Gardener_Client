import getImgUrl from "../../../globalLogic";
import styled from 'styled-components';

const BasicNavMidDom = styled.div`
  margin: 1%;
  padding-top:1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const BasicNavMid = () => {
  return (
    <BasicNavMidDom>
      <div className="title">
        <img src={getImgUrl("gardener")} />
      </div>
      <div className="sectitle">
        <img src={getImgUrl("basicsubtitle")} />
      </div>
    </ BasicNavMidDom>
  );
}

export default BasicNavMid;