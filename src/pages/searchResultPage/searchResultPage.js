import React from 'react'
import styled from "styled-components";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";

const SearchResultPageDom = styled.div`
  display : flex;
  flex-direction: column;
`;

function searchResultPage() {
  return (
    <SearchResultPageDom>
      <BasicNavTop />
    </SearchResultPageDom>
  )
}

export default searchResultPage