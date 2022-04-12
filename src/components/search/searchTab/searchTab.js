import React from 'react';
import SearchTabButton from './searchTabButton/searchTabButton';
import styled from 'styled-components';

const SearchTabDom = styled.div`
  display: flex;
  width : 65%;
`;
const SearchTab = () => {
  return (
    <SearchTabDom>
      <SearchTabButton title="Challenge" />
      <SearchTabButton title="User" />
    </SearchTabDom>
  );
}

export default SearchTab;