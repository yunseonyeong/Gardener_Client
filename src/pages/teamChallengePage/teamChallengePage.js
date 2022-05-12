import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GitLawn } from "git-lawn-hackathon";
import getImgUrl from "../../globalLogic";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import axios from "axios";
import challengePageData from "../../data/challegePageData";
import ChallengeIntro from "../../components/teamChallenge/challengeIntro/challengeIntro";
import MemberIntro from "../../components/teamChallenge/memberIntro/memberIntro";

const LawnDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const GrassFooter = styled.img`
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 10%;
  overflow: hidden;
  /* z-index: 100; */
`;

const ChallengePageDom = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height : 90vh;

`;

const MemberIntroDom = styled.div`
`;



const GetGitLawn = () => {
  const GITHUB_USERNAME = "leobang17";
  return (
    <>
      <LawnDom>
        <GitLawn
          username={GITHUB_USERNAME}
          month={6}
          grassSpan={20}
          grassShape={"Rectangle"}
          color={"PURPLE"}
        />
      </LawnDom>
    </>
  );
};

const ChallengePage = () => {
  const [challengeData, setChallengeData] = useState({});
  const [memberData, setMemberData] = useState([])
  const [showMsgBtn, setShowMsgBtn] = useState(false);
  const [showJoinBtn, setShowJoinBtn] = useState(false);

  useEffect(() => {
    const data = fetchData();
    console.log(data);
    setChallengeData(data.challenge);
    setMemberData(data.members);
    setShowMsgBtn(data.isLeader);
    setShowJoinBtn(data.isMember);

  }, [])

  useEffect(() => {
    console.log(challengeData)
  }, [challengeData])


  const fetchData = () => {
    // const data = await axios.get("/challenge/2");
    const data = challengePageData;
    return data;
  }

  return (
    <ChallengePageDom>
      <BasicNavTop />
      <ChallengeIntro
        showJoinBtn={showJoinBtn}
        showMsgBtn={showMsgBtn}
        challengeData={challengeData}
      />
      <GetGitLawn />
      <MemberIntroDom>
        <MemberIntro memberData={memberData} />
      </MemberIntroDom>
      <GrassFooter src={getImgUrl("basicgrass")} />
    </ChallengePageDom>
  );
};

export default ChallengePage;
