import React from 'react';
import styled from 'styled-components';
import { RiVipCrown2Fill } from "react-icons/ri";


const MemberIntroDom = styled.div`
  display: flex;
  margin: 1%;
  padding: 0% 25% 0% 25%;
  justify-content: center;
  font-family: "dungeunmo";
  flex-direction: column;
`;

const TitleDom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodayCommitTitle = styled.div`
  margin-right: 10%;
`;

const MemberTitle = styled.div`
  font-size: 1.4rem;
`;

const MemListDom = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y : hidden;
  /* height : 150px; */
`;

const MemListItem = styled.div`
  display: flex;
`;

const MemProfileImg = styled.img``;

const MemInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
  /* align-items: center; */
  flex-basis : 30%;
`;

const MemberName = styled.div`
  font-size: ${props => props.fontSize}px;
`
const TodayCommit = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? "#2AB66B" : "#CACACA")};
`;

const MemTier = styled.div``;


const TodayCommitDom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 11.5%;
  flex-basis: 60%;
`;


const MemProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis : 10%;
`;

const CrownIcon = styled.div`
  visibility: ${props => props.visi ? "visible" : 'hidden'};
  display: flex;
  justify-content: center;
`;

const MemberIntro = (props) => {
  
  return (
    <MemberIntroDom>
      <MemberTitle>Members</MemberTitle>
      <TitleDom>
        <div></div>
        <TodayCommitTitle>Today</TodayCommitTitle>
      </TitleDom>
      <MemListDom>
        {props.memberData.map((data) => {
          return (
            <MemListItem>
              <MemProfile>
                <CrownIcon visi={data.isLeader}>
                  <RiVipCrown2Fill color="orange" />
                </CrownIcon>
                <MemProfileImg src={data.profileImgURL} />
              </MemProfile>
              <MemInformation>
                <CrownIcon visi={false}>
                  <RiVipCrown2Fill color="orange" />
                </CrownIcon>
                <MemberName fontSize={12}>{data.devType}</MemberName>
                <MemberName fontSize={18}>{data.name}</MemberName>
              </MemInformation>
              {/* <MemTier></MemTier> */}
              <TodayCommitDom>
                <CrownIcon visi={false}>
                  <RiVipCrown2Fill color="orange" />
                </CrownIcon>
                <TodayCommit color={data.todayCommit} />
              </TodayCommitDom>
            </MemListItem>
          );
        })}
      </MemListDom>
    </MemberIntroDom>
  );
}

export default MemberIntro;