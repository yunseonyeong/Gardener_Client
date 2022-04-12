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

const searchUserBox = () => {
  return (
    <SearchUserBoxDom>
      <SearchUserTable></SearchUserTable>
    </SearchUserBoxDom>
  )
}

export default searchUserBox