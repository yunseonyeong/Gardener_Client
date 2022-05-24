import React, { useEffect, useState } from "react";
import BlueNav from "../../components/nav/basicNav/blueNav";
import styled from "styled-components";
import getImgUrl from '../../globalLogic';
import ExpBar from "../../components/profile/expBar/expBar";
import { GitLawn } from "git-lawn-hackathon";
import { AiOutlineMessage } from "react-icons/ai";
import MessageModal from "../../components/profile/mModal/mModal";
import ChallengeState from "../../components/profile/challengebox/challengeList";
import ChallengeContents from "../../components/profile/challengebox/challengeContents";
import profilePageData from "../../data/profilePageData";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import {useParams} from 'react-router-dom';
import axios from "axios";

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
    height: 90vh;
`;

const ExpBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-left: 15%;
`;

const LogoDom = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  margin-left: 20%;
`;

const Logo = styled.img`
  max-width: 90%;
  margin-top : 7%;
`;

const ProfileDom = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
`;

const GardenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    width: 80%;
`;

const ChallengeListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10%;
`;

const UserName = styled.span`
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 3%;
    margin-right: 2%;
    margin-left : 1%;
`;

const MbtiName = styled.span`
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 0.9rem;
    margin-left: 2%;
    margin-right: 1%;
`;

const ChallengeTitleDom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    margin-left: 10%;
`;

const ChallengeBodyDom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    margin-left: 5%;
`;

const GrassFooter = styled.img`
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 10%;
  overflow: hidden;
`;

const Profilewrap = styled.div`
    display: flex;
    margin-bottom: 0.7rem;
    width: 90%;
`;

const TierImg = styled.img`
width: 2rem;
`;

const TierDom = styled.span`
    margin-left : 2%;
    margin-right: 1%;
`;

const contentbody = styled.div`
    display: inline-block;
    height: 40%;
    width: 30%;
`;

const NameDom = styled.div`
    display:flex;
    flex-direction : column;
`;
const GITHUB_USERNAME = "leobang17";

// const testData = [
//     {bgcolor: "#7FC087", getexp: 100 },
// ];

const handleTierLawn = (tier) => {
  if(tier === 'bronze'){
    return 'GREEN';
  }
  else if(tier === 'silver'){
    return 'ORANGE';
  }
  else if(tier === 'pink'){
    return 'PINK';
  }
  else if(tier === 'purple'){
    return 'PURPLE';
  }
  else if(tier === 'platinum'){
    return 'BLUE';
  }
}


const ProfilePage = () => {
    const [profileData, setProfileData] = useState([]);
    const [listData, setListData] = useState([]);
    const {profileId}=useParams();

    const fetchData = async ()=>{
        const data = await axios.get(`http://localhost:8000/api/user/${profileId}`)
        setProfileData(data.data.profile);
        setListData(data.data.challenges);
        console.log(data.data.profile);
        console.log(profileData);
    }

    useEffect(() => {
        fetchData();
        
    
      }, [])

      useEffect(() => {
        
      }, [profileData])

    return(
        <ProfileWrapper>
            <BasicNavTop />

            <ExpBarWrapper>
                <ProfileDom>
                    {/* <UserName>{profileData.nickname}</UserName> */}
                    <Profilewrap>
                    <NameDom>
                    <MbtiName>{profileData.devType}</MbtiName>
                    <UserName>{profileData.nickname}</UserName>
                    </NameDom>
                    <TierDom>
                    <TierImg src={getImgUrl("flower")}/>
                    </TierDom>
                    <MessageModal />
                    </Profilewrap>
                        <ExpBar getexp = "60" />
                        
                    {/* <MbtiName>{profileData.devType}</MbtiName> */}
                    
                    
                </ProfileDom>
                
            </ExpBarWrapper>

            <GardenWrapper>
            <LogoDom>
                    <Logo src={getImgUrl("boyLogo")} />
            </LogoDom>
                <GitLawn username = {GITHUB_USERNAME} month={4} grassSpan={20} grassShape={"Circle"} color={handleTierLawn(profileData.tierType)}/>
            </GardenWrapper>

            <ChallengeListWrapper>
                <ChallengeTitleDom>
                    <ChallengeState />
                </ChallengeTitleDom>
                <ChallengeBodyDom>
                    <ChallengeContents listData = {listData}/>
                </ChallengeBodyDom>
            </ChallengeListWrapper>
            <GrassFooter src={getImgUrl("basicgrass")} />
        </ProfileWrapper>
    );
};

export default ProfilePage;