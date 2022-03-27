import React from "react";
import styled from "styled-components";
import Basicnav from "../../components/nav/basicNav/basicNav";

const ChallengePageDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const challengePage = () => {
  return (
    <ChallengePageDom>
      <Basicnav />
    </ChallengePageDom>
  );
};

export default challengePage;
