import React, {useState} from 'react'
import styled from "styled-components";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import SearchBar from "../../components/search/searchBar/searchBar";
import SearchTab from '../../components/search/searchTab/searchTab';
import SearchUserBox from '../../components/search/searchResult/searchUser/searchUserBox/searchUserBox';
import SearchChallengeBox from '../../components/search/searchResult/searchChallenge/searchChallengeBox/serachChallengeBox';

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

const SearchResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


function SearchResultPage() {
  const [isUserTab, setIsUserTab] = useState(true);
  const setTrueIsUserTab = () => {
    setIsUserTab(true);
  };
  const setTrueIsChallengeTab = () => {
    setIsUserTab(false);
  };
  return (
    <SearchResultPageDom>
      <BasicNavTop />
      <SearchBarDom>
        <NewSearchBar />
      </SearchBarDom>
      <SearchResultDom>
        <SearchTab isUserTab={isUserTab} setIsUserTab={setIsUserTab} 
        setTrueIsUserTab={setTrueIsUserTab} setTrueIsChallengeTab={setTrueIsChallengeTab}/>
        {isUserTab ? <SearchUserBox/> : <SearchChallengeBox/>}
      </SearchResultDom>
    </SearchResultPageDom>
  );
}

export default SearchResultPage