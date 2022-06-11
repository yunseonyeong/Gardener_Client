import React, { useEffect, useState } from "react";
import BlueNav from "../../components/nav/basicNav/blueNav";
import styled from "styled-components";
import getImgUrl from "../../globalLogic";
import ExpBar from "../../components/profile/expBar/expBar";
import { GitLawn } from "git-lawn-hackathon";
import MessageModal from "../../components/profile/mModal/mModal";
import ChallengeState from "../../components/profile/challengebox/challengeList";
import ChallengeContents from "../../components/profile/challengebox/challengeContents";
import profilePageData from "../../data/profilePageData";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { TiHeart } from "react-icons/ti";
import LevelUpModal from "../../components/profile/mModal/levelUpModal";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 90vh;
`;

const ProfileDom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top : 5%;
  align-items : center;
`;

const Profilewrap = styled.div`
  display: flex;
  justify-content: space-between;
  width : 55%;
`;

const ExpBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 55%;
  margin-top : 1%;  
`;

const NameTierDom = styled.div`
  display : flex;
  justify-content : space-around;
  flex-basis : 25%;
`;

const TiHeartDom = styled.div`
  cursor : pointer;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const LogoDom = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  align-items : center;
`;

const Logo = styled.img`
  max-width: 80%;
  margin-top: 7%;
`;

const GardenDom = styled.div`
  display : flex;
  justify-content : center;
  width : 60%;
`;

const GardenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  width: 100%;
`;

const ChallengeListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items : center;
  flex-direction: column;
  margin-bottom: 10%;
  width : 100%;
`;

const UserName = styled.span`
  flex-basis: 50%;
  font-family: "dungeunmo";
  margin-bottom: 3%;
  font-size : 1.3rem;
`;

const MbtiName = styled.div`
  flex-basis : 50%;
  font-family: "dungeunmo";
  font-size : 0.9rem;
`;

const ChallengeTitleDom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
  width : 55%;
`;

const ChallengeBodyDom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.5%;
  width : 55%;
`;

const GrassFooter = styled.img`
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 10%;
  overflow: hidden;
`;



const TierImg = styled.img`
  width: 50%;
`;

const TierDom = styled.div`
  flex-basis : 40%;
`;




const NameDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const LevelUpDom = styled.div`
  left: 25%;
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
  border: 5px dashed #13a74d;
  box-sizing: content-box;
`;

const GITHUB_USERNAME = "leobang17";
const handleTierLawn = (tier) => {
  if (tier === "bronze") {
    return "GREEN";
  } else if (tier === "silver") {
    return "ORANGE";
  } else if (tier === "pink") {
    return "PINK";
  } else if (tier === "purple") {
    return "PURPLE";
  } else if (tier === "platinum") {
    return "BLUE";
  }
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const [listData, setListData] = useState([]);
  const { id } = useParams();
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [levelUp, setLevelUp] = useState(false);
  const [bgColor, setBgColor] = useState([]);

  const handleModal = () => {
    setMessageModalOpen(!messageModalOpen);
  };

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:8000/api/user/${id}`)
    setProfileData(data.data.profile);
    setListData(data.data.challenges);
    console.log(data.data.profile);
  //  setListDataconsole.log(profileData);
    // const data = profilePageData;
    // console.log(data);
    // console.log(data.profile)
    // setProfileData(data.profile);
    // console.log(profileData);
    // setListData(data.challenges);
    // console.log(listData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (profileData.levelup === true) {
      setLevelUp(true);
    }
  }, [profileData]);

  const SelectTierImg = (tier, tierNum) => {
    if (tier === "bronze") {
      if (tierNum === 1) {
        return <TierImg src={getImgUrl("bronze1")} />;
      } else if (tierNum === 2) {
        return <TierImg src={getImgUrl("bronze2")} />;
      } else if (tierNum === 3) {
        return <TierImg src={getImgUrl("bronze3")} />;
      } else if (tierNum === 4) {
        return <TierImg src={getImgUrl("bronze4")} />;
      } else if (tierNum === 5) {
        return <TierImg src={getImgUrl("bronze5")} />;
      }
    } else if (tier === "silver") {
      if (tierNum === 1) {
        return <TierImg src={getImgUrl("silver1")} />;
      } else if (tierNum === 2) {
        return <TierImg src={getImgUrl("silver2")} />;
      } else if (tierNum === 3) {
        return <TierImg src={getImgUrl("silver3")} />;
      } else if (tierNum === 4) {
        return <TierImg src={getImgUrl("silver4")} />;
      } else if (tierNum === 5) {
        return <TierImg src={getImgUrl("silver5")} />;
      }
    } else if (tier === "pink") {
      if (tierNum === 1) {
        return <TierImg src={getImgUrl("pink1")} />;
      } else if (tierNum === 2) {
        console.log(tierNum);
        return <TierImg src={getImgUrl("pink2")} />;
      } else if (tierNum === 3) {
        return <TierImg src={getImgUrl("pink3")} />;
      } else if (tierNum === 4) {
        return <TierImg src={getImgUrl("pink4")} />;
      } else if (tierNum === 5) {
        return <TierImg src={getImgUrl("pink5")} />;
      }
    } else if (tier === "purple") {
      if (tierNum === 1) {
        return <TierImg src={getImgUrl("purple1")} />;
      } else if (tierNum === 2) {
        return <TierImg src={getImgUrl("purple2")} />;
      } else if (tierNum === 3) {
        return <TierImg src={getImgUrl("purple3")} />;
      } else if (tierNum === 4) {
        return <TierImg src={getImgUrl("purple4")} />;
      } else if (tierNum === 5) {
        return <TierImg src={getImgUrl("purple5")} />;
      }
    } else if (tier === "platinum") {
      if (tierNum === 1) {
        return <TierImg src={getImgUrl("platinum1")} />;
      } else if (tierNum === 2) {
        return <TierImg src={getImgUrl("platinum2")} />;
      } else if (tierNum === 3) {
        return <TierImg src={getImgUrl("platinum3")} />;
      } else if (tierNum === 4) {
        return <TierImg src={getImgUrl("platinum4")} />;
      } else if (tierNum === 5) {
        return <TierImg src={getImgUrl("platinum5")} />;
      }
    }
  };

  const SelectLogoImg = (tier) => {
    if (tier === "bronze") {
      return <Logo src={getImgUrl("boyLogo")} />;
    } else if (tier === "silver") {
      return <Logo src={getImgUrl("boyLogo2")} />;
    } else if (tier === "pink") {
      return <Logo src={getImgUrl("boyLogo3")} />;
    } else if (tier === "purple") {
      return <Logo src={getImgUrl("boyLogo4")} />;
    } else if (tier === "platinum") {
      return "BLUE";
    }
  };

  useEffect(() => {
    if (profileData.tierType === "bronze") {
      setBgColor(["#5fb871", "#8ed49c"]);
    } else if (profileData.tierType === "pink") {
      setBgColor(["#e88b5d", "#fae6dc"]);
    } else if (profileData.tierType === "purple") {
      setBgColor(["#723491", "#a882cf"]);
    }
  }, [profileData]);

  return (
    <ProfileWrapper>
      <BasicNavTop />
      <ProfileDom>
        <Profilewrap>
          <NameTierDom>
          <NameDom>
            <MbtiName>{profileData.devType}</MbtiName>
            <UserName>{profileData.nickname}</UserName>
          </NameDom>
          <TierDom>
            {SelectTierImg(profileData.tierType, profileData.tierNum)}
          </TierDom>
          </NameTierDom>
          <TiHeartDom>
          <TiHeart
            color="coral"
            size={35}
            className="Heart"
            onClick={handleModal}
          />
          </TiHeartDom>
          {messageModalOpen && (
            <MessageModal setMessageModalOpen={setMessageModalOpen} />
          )}
        </Profilewrap>
        <ExpBarWrapper>
        <ExpBar bgcolor={bgColor} getexp={profileData.exp} />
        </ExpBarWrapper>
      </ProfileDom>
      <GardenWrapper>
        <GardenDom>
        <LogoDom>{SelectLogoImg(profileData.tierType)}</LogoDom>
        <GitLawn
          username={GITHUB_USERNAME}
          month={4}
          grassSpan={20}
          grassShape={"Circle"}
          color={handleTierLawn(profileData.tierType)}
        />
        </GardenDom>
      </GardenWrapper>

      <ChallengeListWrapper>
        <ChallengeTitleDom>
          <ChallengeState />
        </ChallengeTitleDom>
        <ChallengeBodyDom>
          <ChallengeContents listData={listData} />
          {/* <Link to={`/challenge/${listData.challengeId}`}>
            <ChalDom>
              <ListTitle>{listData.challengeTitle}</ListTitle>
              <ListImg src={listData.challengeImgURL} />
            </ChalDom>
          </Link> */}
        </ChallengeBodyDom>
      </ChallengeListWrapper>
      <GrassFooter src={getImgUrl("basicgrass")} />
      {levelUp ? (
        <LevelUpDom>
          <LevelUpModal setLevelUp={setLevelUp} />
        </LevelUpDom>
      ) : null}
    </ProfileWrapper>
  );
};

export default ProfilePage;
