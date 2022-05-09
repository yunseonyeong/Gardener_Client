import React from 'react';
import styled from 'styled-components';
import { RiVipCrown2Fill } from "react-icons/ri";


const MemberIntroDom = styled.div``;

const TodayCommitTitle = styled.div``;

const MemberTitle = styled.div`
  font-size: 10px;
`;

const MemListDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemListItem = styled.div`
  display: flex;
`;

const MemProfileImg = styled.img``;

const MemInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.div`
  font-size: ${props => props.fontSize}px;
`
const TodayCommit = styled.div`
  width : 10px;
  height: 10px;
  background-color: ${props => props.color ? 'green' : 'gray'};
`;

const MemTier = styled.div``;

const MemProfile = styled.div`
  display: flex;
`;

const CrownIcon = styled.div`
  visibility: ${props => props.visi ? "visible" : 'hidden'};
`;

const MemberIntro = (props) => {
  
  return (
    <MemberIntroDom>
      <MemberTitle>Members</MemberTitle>
      <TodayCommitTitle>Today</TodayCommitTitle>
      <MemListDom>
        {
          props.memberData.map((data)=>{
            return (
              <MemListItem>
                <MemProfile>
                  <CrownIcon visi={data.isLeader}>
                    <RiVipCrown2Fill color="orange" />
                  </CrownIcon>
                  <MemProfileImg src={data.profileImgURL} />
                </MemProfile>
                <MemInformation>
                  <MemberName fontSize={10}>{data.devType}</MemberName>
                  <MemberName fontSize={15}>{data.name}</MemberName>
                </MemInformation>
                {/* <MemTier></MemTier> */}
                <TodayCommit color={data.todayCommit} />
              </MemListItem>
            );
          })
        }
      </MemListDom>
    </MemberIntroDom>
  );
}

export default MemberIntro;