import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBarDom = styled.div`
  background-color: #E3F2B8;
  width:55%;
  border-radius : 50px;
  display: flex;
  align-items: center;
`;

const SearchBarInput = styled.input`
  width: 75%;
  background-color: #e3f2b8;
  border: none;
  padding-top:2.5%;
  padding-bottom: 2.5%;
   &:focus {
        outline: none;
   }
`;
const SearchBarIcon = styled.div`
  padding-left: 5%;
  padding-right: 3%;
  
`

function searchBar() {
  return (
    <SearchBarDom>
      <SearchBarIcon>
        <BiSearchAlt2 />
      </SearchBarIcon>
      <SearchBarInput />
    </SearchBarDom>
  );
}

export default searchBar