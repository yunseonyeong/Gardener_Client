import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GitLawn } from "git-lawn";
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
`;

const ChallengePageDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const GetGitLawn = () => {
  const GITHUB_USERNAME = "yunseonyeong";
  return (
    <>
      <LawnDom>
        <GitLawn username={GITHUB_USERNAME} month={6} grassSpan={20} />
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
    // const data = await axios.get("aaaa");
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
      <MemberIntro 
        memberData={memberData}      
      />
      <GrassFooter src={getImgUrl("basicgrass")} />
    </ChallengePageDom>
  );
};

export default ChallengePage;
