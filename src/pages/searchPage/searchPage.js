import React from 'react'
import styled from "styled-components"
import Bluenav from '../../components/nav/basicNav/blueNav';
import SearchBar from '../../components/search/searchBar/searchBar';
import getImgUrl from '../../globalLogic';

const SearchPageDom = styled.div`
  display:flex;
  flex-direction: column;
`;
const SearchTitleDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:3%;
`;

const SearchBarDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:4%;
`;

const searchPage = () => {

  return (
    <SearchPageDom>
      <Bluenav />
      <SearchTitleDom>
        <img src={getImgUrl("SearchMidTitle")} />
      </SearchTitleDom>
      <SearchBarDom>
        <SearchBar />
      </SearchBarDom>
    </SearchPageDom>
  );
}

export default searchPage