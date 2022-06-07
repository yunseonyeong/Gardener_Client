import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { TiHeart } from "react-icons/ti";
import getImgUrl from '../../../globalLogic';
import JoinModal from '../joinModal/joinModal';
import WelcomeModal from '../welcomeModal/welcomeModal';
import NotifyModal from '../notifyModal/notifyModal';
import RepoUrlModal from '../repoUrlModal/repoUrlModal';
import { BsFillBellFill } from "react-icons/bs";


const TeamIntroductionDom = styled.div`
  display: flex;
  margin: 1%;
  padding: 3% 18% 1% 18%;
  justify-content: center;
  font-family: 'dungeunmo';
`;

const TeamProfileImg = styled.img`
  border-radius: 70px;
  height: 70px;
  width: 70px;
`;

const TeamTitleDom = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  justify-content: center;
`;

const TeamDate = styled.div`
  display: flex;
  margin-top : 3%;
  justify-content: center;
  align-items: center;
  font-size : 0.9rem;
  font-family: 'roboto';
`;

const TeamTitle = styled.div`
  font-size: 1.3rem;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamMsgDom = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const TeamProfileMsg = styled.div`
  margin-left: 4%;
  width: 100%;
  font-family: "roboto";
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  padding : 3% 5% 3% 5%;
`;

const ButtonDom = styled.div`
  display: flex;
  flex-basis: 30%;
  justify-content: center;
  margin-left: 5%;
  align-items: center;

`;

const MsgButton = styled.div`
  flex-basis: 15%;
  display : flex;
  justify-content: center;
  align-items: center;
`;

const NotifyButton = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const JoinButton = styled.div`
  margin: 3%;
  flex-basis: 35%;
  visibility: ${(props) => (props.join ? "hidden" : "visible")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4cb2eb;
  border-radius: 10px;
  padding-top: 2%;
  padding-bottom: 2%;
  color: white;
  cursor : pointer;
`;

const ShareButton = styled.div`
  margin: 2%;
  flex-basis: 30%;
  background-color: #51c15f;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  color : white;
`;

const WelcomeDom = styled.div`
  bottom: 55%;
  position: absolute;
  width: 50%;
  height: 9%;
  background-color: #a9d177;
  border-radius: 100px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px dashed #13A74D;
  box-sizing: content-box;
`;



const ChallengeIntro = (props) => {

  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [welcomeMsgOpen, setWelcomeMsgOpen] = useState(false);
  const [repoUrlOpen, setRepoUrlOpen] = useState(false);

  const handleJoinBtn = () => {
    setJoinModalOpen(!joinModalOpen);
  };

  const handleAcceptBtn = () => {
    setRepoUrlOpen(true);
    setJoinModalOpen(false);
  };

  const handleRepoBtn = () => {
    setRepoUrlOpen(false);
    setWelcomeMsgOpen(true);
    props.fetchData();
  }

  // useEffect(() => {
  //   setTimeout(()=> setWelcomeMsgOpen(false), 7000);
  // }, [welcomeMsgOpen])
  
  
  return (
    <TeamIntroductionDom>
      <TeamProfileImg src={getImgUrl(props.challengeData.profileImgURL)}></TeamProfileImg>
      <TeamTitleDom>
        <TeamTitle>{props.challengeData.name}</TeamTitle>
        <TeamDate>{props.challengeData.date}~</TeamDate>
      </TeamTitleDom>
      <TeamMsgDom>
        <TeamProfileMsg>{props.challengeData.introductionMsg}</TeamProfileMsg>
      </TeamMsgDom>
      <ButtonDom>
        <ShareButton>URL공유</ShareButton>
        <JoinButton join={props.showJoinBtn} onClick={handleJoinBtn}>
          참가하기
        </JoinButton>
        <MsgButton msg={props.showMsgBtn}>
          <TiHeart color="coral" size={35} />
        </MsgButton>
        <NotifyButton>
          <BsFillBellFill onClick={()=>{props.setNotifyModalOpen(true)}} color="orange" size={23} />
        </NotifyButton>
      </ButtonDom>
      {joinModalOpen ? (
        <JoinModal
          challName={props.challengeData.name}
          handleJoinBtn={handleJoinBtn}
          handleAcceptBtn={handleAcceptBtn}
        />
      ) : null}

      {repoUrlOpen ? (
        <RepoUrlModal handleRepoBtn={handleRepoBtn} setRepoUrlOpen={setRepoUrlOpen}/>
      ):null}

      {welcomeMsgOpen ? (
        <WelcomeDom>
          <WelcomeModal
            setWelcomeMsgOpen={setWelcomeMsgOpen}
            setNotifyModalOpen={props.setNotifyModalOpen}
          />
        </WelcomeDom>
      ) : null}
    </TeamIntroductionDom>
  );
}

export default ChallengeIntro;