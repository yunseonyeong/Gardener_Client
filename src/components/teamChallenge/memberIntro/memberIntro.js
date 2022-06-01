import React, {useState} from 'react';
import styled from 'styled-components';
import { RiVipCrown2Fill } from "react-icons/ri";
import axios from 'axios';
import getImgUrl from "../../../globalLogic"; 

const MemberIntroDom = styled.div`
  display: flex;
  margin: 1%;
  padding: 0% 25% 0% 25%;
  justify-content: center;
  font-family: "dungeunmo";
  flex-direction: column;
  z-index: 0;
`;

const TitleDom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodayCommitTitle = styled.div`
  margin-right: 10%;
`;

const MemberTitle = styled.div`
  font-size: 1.4rem;
`;

const MemListDom = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y : hidden;
  /* height : 150px; */
`;

const MemListItem = styled.div`
  display: flex;
`;

const MemProfileImg = styled.img`{
  max-width: 60%;
}`;

const MemInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
  /* align-items: center; */
  flex-basis : 30%;
`;

const MemberName = styled.div`
  font-size: ${props => props.fontSize}px;
`
const TodayCommit = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? "#00AFE7" : "#CACACA")};
  cursor: pointer;
`;

const MemTier = styled.div``;


const TodayCommitDom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 11.5%;
  flex-basis: 60%;
`;


const MemProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis : 10%;
`;

const CrownIcon = styled.div`
  visibility: ${props => props.visi ? "visible" : 'hidden'};
  display: flex;
  justify-content: center;
`;

const AwakeModal = styled.div`
  width: 300px;
  height: 100px;
  background-color: #53d787;
  z-index: 2;
  position: absolute;
  left: 75%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AwakeTxt = styled.div`
  flex-basis : 50%;
  color : white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

const AwakeButtonDom = styled.div`
  flex-basis: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AwakeBtn = styled.div`
  font-size: 0.9rem;
  width: 18%;
  padding: 1.5%;
  background-color: #fbfbfb;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
  border-radius: 8px;
  cursor: pointer;
`;

const SuccessModal = styled.div`
  width: 50%;
  position: absolute;
  z-index: 4;
  left: 25%;
  top: 30%;
  height: 10%;
  display: flex;
  justify-content: center;
  font-size: 2.9rem;
  border-radius: 25px;
  align-items: center;
  background-color: #a98bff;
  color: white;
`;

const ClickSuccess = styled.div`
  width : 100%;
  height : 20px;
`;

const MemberIntro = (props) => {
  const [awakeTodayCommit, setAwakeTodayCommit] = useState(false);
  const [selectedUncommit, setSelectedUncommit] = useState(["id","name"]);

  const handleTodayCommit = (isCommit, id, name, repoUrl) => {
    if (!isCommit){
      setAwakeTodayCommit(true);
      setSelectedUncommit([id,name]);
    }
    else {
      window.open(repoUrl, '_blank')
    }
  }
  

  const putAwakeMem = (memId) => {
    axios.put("http://localhost:8000/api/mail", {
      data : {Memid : memId},
    });
    setAwakeTodayCommit(false);
  }

  const [success, setSuccess] = useState(false);
  

  return (
    <MemberIntroDom>
      <ClickSuccess
        onClick={() => {
          console.log(success);
          setSuccess(!success);
        }}
      />

      <MemberTitle>Members</MemberTitle>
      <TitleDom>
        <div></div>
        <TodayCommitTitle>Today</TodayCommitTitle>
      </TitleDom>
      <MemListDom>
        {props.memberData.map((data) => {
          // if(data.name === "yunseonyeong" && data.todayCommit === true){
          //   setSuccess(true);
          // }
          return (
            <MemListItem>
              <MemProfile>
                <CrownIcon visi={data.isLeader}>
                  <RiVipCrown2Fill color="orange" />
                </CrownIcon>
                <MemProfileImg src={getImgUrl(data.profileImgURL)} />
              </MemProfile>
              <MemInformation>
                <CrownIcon visi={false}>
                  <RiVipCrown2Fill color="orange" />
                </CrownIcon>
                <MemberName fontSize={12}>{data.devType}</MemberName>
                <MemberName fontSize={18}>{data.name}</MemberName>
              </MemInformation>
              {/* <MemTier></MemTier> */}
              <TodayCommitDom>
                <CrownIcon visi={false}>
                  <RiVipCrown2Fill color="orange" />
                </CrownIcon>
                <TodayCommit
                  color={data.todayCommit}
                  onClick={() => {
                    handleTodayCommit(
                      data.todayCommit,
                      data.memberId,
                      data.name,
                      data.repoUrl
                    );
                  }}
                />
              </TodayCommitDom>
            </MemListItem>
          );
        })}
        {awakeTodayCommit ? (
          <AwakeModal>
            <AwakeTxt>{selectedUncommit[1]} 님을 깨울까요?</AwakeTxt>
            <AwakeButtonDom>
              <AwakeBtn
                onClick={() => {
                  putAwakeMem(selectedUncommit[0]);
                }}
              >
                네!!
              </AwakeBtn>
              <AwakeBtn
                onClick={() => {
                  setAwakeTodayCommit(false);
                }}
              >
                아니오
              </AwakeBtn>
            </AwakeButtonDom>
          </AwakeModal>
        ) : null}

        {success ? <SuccessModal>MISSION COMPLETE !</SuccessModal> : null}
      </MemListDom>
    </MemberIntroDom>
  );
}

export default MemberIntro;