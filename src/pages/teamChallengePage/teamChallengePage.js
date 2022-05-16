import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GitLawn } from "git-lawn-hackathon";
import getImgUrl from "../../globalLogic";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import axios from "axios";
import challengePageData from "../../data/challegePageData";
import ChallengeIntro from "../../components/teamChallenge/challengeIntro/challengeIntro";
import MemberIntro from "../../components/teamChallenge/memberIntro/memberIntro";
import {useParams} from "react-router-dom";

const LawnDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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
  let {id} = useParams();

  useEffect(() => {
    fetchData(); 
  }, [])



  const fetchData = () => {
    
   // const data = await axios.get("http://localhost:8000/api/challenge/2");
    // const data = await axios.get(`http://localhost:8000/api/challenge/${id}`);
    const data = challengePageData;

    // setChallengeData(data.data.challenge);
    // setMemberData(data.data.members);
    // setShowMsgBtn(data.data.isLeader);
    // setShowJoinBtn(data.data.isMember);
    setChallengeData(data.challenge);
    setMemberData(data.members);
    setShowMsgBtn(data.isLeader);
    setShowJoinBtn(data.isMember);
  }

  return (
    <ChallengePageDom>
      <BasicNavTop />
      <ChallengeIntro
        showJoinBtn={showJoinBtn}
        showMsgBtn={showMsgBtn}
        challengeData={challengeData}
      />
      <GetGitLawn/>
      <MemberIntroDom>
        <MemberIntro memberData={memberData} />
      </MemberIntroDom>
      <GrassFooter src={getImgUrl("basicgrass")} />
    </ChallengePageDom>
  );
};

export default ChallengePage;
