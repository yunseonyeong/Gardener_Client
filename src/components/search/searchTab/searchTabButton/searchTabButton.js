import React from 'react'
import styled from 'styled-components';

const TabButton = styled.div`
  padding : 1%;
  cursor : pointer;
  border-bottom : ${props => (props.isUserTab) && (props.title == "User") || (!props.isUserTab) && (props.title == "Challenge") ? '2px solid gray' : 'none'};
`;

const SearchTabButton = (props) => {
  console.log(props.isUserTab);
  return (

    <TabButton onClick = {props.onClick} isUserTab={props.isUserTab} title = {props.title}>{props.title}</TabButton>
  )
}

export default SearchTabButton;