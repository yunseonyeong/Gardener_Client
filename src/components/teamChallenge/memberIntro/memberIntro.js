import React from 'react';
import styled from 'styled-components';

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
                <MemProfileImg src={data.profileImgURL} />
                <MemInformation>
                  <MemberName fontSize={10}>
                    {data.devType}
                  </MemberName>
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