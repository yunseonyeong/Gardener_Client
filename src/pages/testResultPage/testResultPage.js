import React,{ useEffect, useState} from "react";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import styled from "styled-components";
import getImgUrl from '../../globalLogic';
import FriendList from "../../data/friendList";
import RecommandFriend from "../../components/testResult/RecomFriend";
import {useParams, Link} from 'react-router-dom';

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top : 2%;
`;

const BodyTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1.5rem;
    color: #707070;
`;

const LogoDom = styled.div`
  display: flex;
  justify-content: center;
  width: 18%;
`;

const Logo = styled.img`
  max-width: 18%;
`;

const BodyTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
`;

const TypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top : 4%;
`;

const TitleExplanation = styled.div`
    display: flex;
    width : 100%;
    justify-content: center;
    align-items: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1rem;
    padding : 5% 0 5% 0;
`;

const TypeTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1.4rem;
    color: #845CF3;
`;

const ExpBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 70%;
  background: #ffc5ab;
  margin-top: 5%;
  border-radius: 10px;
  font-family: "dungeunmo";
  font-weight: 400;
  font-size: 1.1rem;
  flex-direction: column;
  color: #4b4b4b;
  border : 4px dashed gray;
`;

const RecWholeBodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2%;
`;

const RecBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;


const RecBodyTitle = styled.div`
  font-family: "dungeunmo";
  font-weight: 400;
  font-size: 1rem;
  color: #333333;
`;

const RecBody = styled.div`
  margin-top: 2%;
  display: flex;
`;

const RecCAUBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`;

const RecCAUTitle = styled.div`
  font-family: "dungeunmo";
  font-weight: 400;
  font-size: 1rem;
  color: #333333;
`;

const RecCAUBody = styled.div`
    margin-top:2%;
    display: flex;
`;

const ImgDom = styled.div`
    display: flex;
    flex:1;
`;

const CauImg = styled.img`
    width: 80%;
    cursor: pointer;
`;


const TestResultPage = () => {
    const [friendData, setFriendData] = useState([]);
    const {id}=useParams();
    const fetchData = ()=>{
        const data = FriendList;
        return data;
    }
    useEffect(() => {
        const data = fetchData();
        console.log(data);
        setFriendData(data.recommands);
        
      }, [])

    return (
      <>
        <BodyWrapper>
          <BodyTop>?????? ????????? ?????????</BodyTop>
        </BodyWrapper>

        <BodyTitle>
          <Logo src={getImgUrl("boyLogo")} />
          <TypeWrapper>
            <TitleExplanation>???????????? ????????? ?????????</TitleExplanation>
            <TypeTitle>????????? ?????????</TypeTitle>
          </TypeWrapper>
          <Logo src={getImgUrl("girlLogo")} />
        </BodyTitle>

        <ExpBody>
          <ul>??????????????????????????? ???????????? ????????????!</ul>
          <ul>????????? ?????? ????????? ????????? ???????????? ??? ????????????</ul>
          <ul>????????? ????????? ????????????!</ul>
        </ExpBody>

        <RecWholeBodyWrapper>
          <RecBodyWrapper>
            <RecBodyTitle>?????? ???????????? ?????????!</RecBodyTitle>
            <RecBody>
              <RecommandFriend friendData={friendData} />
            </RecBody>
          </RecBodyWrapper>

          <RecCAUBodyWrapper>
            <RecCAUTitle> &lt;???????????????&gt; ???????????? ??????????</RecCAUTitle>
            <RecCAUBody>
              <ImgDom>
                <Link to={`/profile/${1}`}>
                  <CauImg src={getImgUrl("seon")} />
                </Link>
              </ImgDom>
              <ImgDom>
                <Link to={`/profile/${3}`}>
                <CauImg src={getImgUrl("soo")} />
                </Link>
              </ImgDom>
              <ImgDom>
                <CauImg src={getImgUrl("mapage")} />
              </ImgDom>
            </RecCAUBody>
          </RecCAUBodyWrapper>
        </RecWholeBodyWrapper>
      </>
    );
};

export default TestResultPage;