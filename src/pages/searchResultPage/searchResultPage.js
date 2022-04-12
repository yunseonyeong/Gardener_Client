import React from 'react'
import styled from "styled-components";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import SearchBar from "../../components/search/searchBar/searchBar";

const SearchResultPageDom = styled.div`
  display : flex;
  flex-direction: column;
`;

const SearchBarDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  padding-top: 5%;
`;

const NewSearchBar = styled(SearchBar)`
  width : 75%;
`;

function searchResultPage() {
  return (
    <SearchResultPageDom>
      <BasicNavTop />
      <SearchBarDom>
        <NewSearchBar />
      </SearchBarDom>
    </SearchResultPageDom>
  );
}

export default searchResultPage