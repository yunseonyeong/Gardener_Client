import React from 'react';
import styled from 'styled-components';
import getImgUrl from '../../../globalLogic';

const SearchBarDom = styled.div`
  background-color: #E3F2B8;
  width:50%;
  border-radius : 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBarInput = styled.input`
  width: 90%;
  background-color: #e3f2b8;
  border: none;
  padding-top:3%;
  padding-bottom: 3%;
   &:focus {
        outline: none;
   }
`;
const SearchBarIcon = styled.div`
   width:5%;
`

function searchBar() {
  return (
    <SearchBarDom>
      <SearchBarInput />
      <SearchBarIcon>
        <img src={getImgUrl("searchIcon")} />
      </SearchBarIcon>
    </SearchBarDom>
  );
}

export default searchBar