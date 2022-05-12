import React from "react";
import styled from "styled-components";

const SearchChallengeBoxDom = styled.div`
  display: flex;
  width: 65%;
`;

const SearchChallengeTable = styled.div`
  background-color: #f2f1f1;
  width: 100%;
  height: 100vh;
  margin-top: 2%;
  border-radius: 3%;
`;

const SearchChallengeTableTitle = styled.div`
  background-color: #d0d0d0;
  width: 98%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  border-radius: 14px 14px 0 0;
  padding: 0.5% 1% 0.5% 1%;
`;

const ChalTableTitleColId = styled.div`
  flex-basis: 10%;
  display: flex;
  justify-content: center;
`;

const ChalTableTitleColName = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;

const ChalTableTitleColLv = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

const ChalTableTitleColCommit = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;

const searchChallengeBox = () => {
  return (
    <SearchChallengeBoxDom>
      <SearchChallengeTable>
        <SearchChallengeTableTitle>
          <ChalTableTitleColId>#</ChalTableTitleColId>
          <ChalTableTitleColName>Leader</ChalTableTitleColName>
          <ChalTableTitleColLv>Challenge Name</ChalTableTitleColLv>
          <ChalTableTitleColCommit>Total Commits</ChalTableTitleColCommit>
        </SearchChallengeTableTitle>
      </SearchChallengeTable>
    </SearchChallengeBoxDom>
  );
};

export default searchChallengeBox;
