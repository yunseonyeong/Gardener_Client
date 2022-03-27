import React from 'react'
import styled from "styled-components"

import BasicNav from '../../components/nav/basicNav/basicNav.js'

const SearchPageDiv = styled.div`
  display:flex;
  flex-direction: column;
`;

const searchPage = () => {

  return (
    <SearchPageDiv> 
      <BasicNav />
    </SearchPageDiv>
  );
}

export default searchPage