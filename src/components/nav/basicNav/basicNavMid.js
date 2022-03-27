import getImgUrl from "../../../globalLogic";
import styled from 'styled-components';

const BasicNavMidDom = styled.div`
  margin: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titles = styled.div`
  width: 12%;
`;


const BasicNavMid = () => {
  return (
    <BasicNavMidDom>
      <Titles>
        <div className="title">
          <img src={getImgUrl("gardener")} />
        </div>
        <div className="sectitle">
          <img src={getImgUrl("basicsubtitle")} />
        </div>
      </Titles>
    </ BasicNavMidDom>
  );
}

export default BasicNavMid;