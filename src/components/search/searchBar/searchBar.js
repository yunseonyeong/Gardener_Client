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
  padding-top:1.2%;
  padding-bottom: 1.2%;
  font-size : 25px;
   &:focus {
        outline: none;
   }
  
`;

const SearchBarIcon = styled.div`
  padding-left: 5%;
  padding-right: 3%;
  font-size : 25px;
  
`

function searchBar(props) {
  return (
    <SearchBarDom className={props.className}>
      <SearchBarIcon>
        <BiSearchAlt2 />
      </SearchBarIcon>
      <SearchBarInput placeholder="Search"/>
    </SearchBarDom>
  );
}

export default searchBar