import React from 'react'
import styled from 'styled-components';

const SearchTabButtonDom = styled.div`
  padding : 1%;
`;

const SearchTabButton = (props) => {
  return (

    <SearchTabButtonDom>{props.title}</SearchTabButtonDom>
  )
}

export default SearchTabButton;