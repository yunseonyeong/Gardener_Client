import React, {useState, useEffect} from 'react';
import SearchTabButton from './searchTabButton/searchTabButton';
import styled from 'styled-components';

const SearchTabDom = styled.div`
  display: flex;
  width : 65%;
`;

const SearchTab = (props) => {

 useEffect(() => {
   console.log(props.isUserTab);
 }, [props.isUserTab]);

  return (
    <SearchTabDom>
      <SearchTabButton
        title="User"
        onClick={props.setTrueIsUserTab}
        isUserTab={props.isUserTab}
      />
      <SearchTabButton
        title="Challenge"
        onClick={props.setTrueIsChallengeTab}
        isUserTab={props.isUserTab}
      />
    </SearchTabDom>
  );
}

export default SearchTab;