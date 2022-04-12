import React from 'react';
import styled from 'styled-components';

const SearchUserBoxDom = styled.div`
  display: flex;
  width: 65%;
`;

const SearchUserTable = styled.div`
  background-color: #f2f1f1;
  width: 100%;
  height: 100vh;
  margin-top: 2%;
  border-radius: 3%;
`;

const SearchUserTableTitle = styled.div`
  background-color: #d0d0d0;
  width: 98%;
  height : 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  border-radius: 14px 14px 0 0;
  padding: 0.5% 1% 0.5% 1%;
`;

const UserTableTitleColId = styled.div`
  flex-basis: 10%;
  display: flex;
  justify-content: center;
`;

const UserTableTitleColName = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

const UserTableTitleColLv = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;

const UserTableTitleColCommit = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
`;


const searchUserBox = () => {
  return (
    <SearchUserBoxDom>
      <SearchUserTable>
        <SearchUserTableTitle>
          <UserTableTitleColId>#</UserTableTitleColId>
          <UserTableTitleColName>User Name</UserTableTitleColName>
          <UserTableTitleColLv>Level</UserTableTitleColLv>
          <UserTableTitleColCommit>Total Commits</UserTableTitleColCommit>
        </SearchUserTableTitle>
      </SearchUserTable>
    </SearchUserBoxDom>
  );
}

export default searchUserBox