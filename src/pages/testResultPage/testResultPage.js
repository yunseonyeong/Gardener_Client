import React,{ useEffect, useState } from "react";
import BasicNavTop from "../../components/nav/basicNav/basicNavTop";
import styled from "styled-components";
import getImgUrl from '../../globalLogic';
import FriendList from "../../data/friendList";
import RecommandFriend from "../../components/testResult/RecomFriend";
import {useParams, Link} from 'react-router-dom';

const TestresultPage = styled.div`
display : flex;
flex-direction: column;
height : 100vh;
min-height: 100%;
background: rgba(214, 214, 214, 0.54);
`;

const TestBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 450px;
    background: #FFEFC7;
    margin-left: 20%;
    border-radius: 20px;
    margin-top:5vh;
`;

const BodyWrapper = styled.div`
    display: flex;
    flex-drection: row;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const BodyTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 0.9rem;
    color: #707070;
`;

const LogoDom = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  margin-left: 20%;
`;

const Logo = styled.img`
  max-width: 20%;
  margin-top : 3%;
`;

const BodyTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
`;

const TypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10%;
`;

const TitleExplanation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1rem;
`;

const TypeTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1.5rem;
    color: #845CF3;
`;

const ExpBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 80%;
    background: #FFC5AB;
    margin-left: 10%;
    margin-top: 5%;
    border-radius: 10px;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 0.8rem;
    flex-direction: column;
    color: #707070;
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
    width: 40%;
`;

const RecBodyTitle = styled.div`
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1rem;
    margin-left: 10%;
`;

const RecBody = styled.div`
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-right: 10%;
`;

const RecCAUBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`;

const RecCAUTitle = styled.div`
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 1rem;
`;

const RecCAUBody = styled.div`
    margin-right: 15%;
    display: flex;
    flex-direction: row;
`;

const ImgDom = styled.div`
    display: flex;
    margin-bottom: 5%;
    flex:1
    margin-left: 5%;
`;
const CauImg = styled.img`
    width: 80%;
    margin-top: 20%;
    margin-left: 30%;
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

    return(
        <TestresultPage>
            <BasicNavTop/>
        <TestBox>
        
            <BodyWrapper>
            <BodyTop>나의 개발자 성향은</BodyTop>
            </BodyWrapper>

            <BodyTitle>
                <Logo src= {getImgUrl("boyLogo")}/>
                    <TypeWrapper>
                    <TitleExplanation>세심만점 조용한 배려왕</TitleExplanation>
                    <TypeTitle>폭신한 라일락</TypeTitle>
                    </TypeWrapper>
                <Logo src= {getImgUrl("girlLogo")}/>
            </BodyTitle>
            
            <ExpBody>
                <ul>완벽주의자만큼이나 세심하고 꼼꼼해요!</ul>
                <ul>눈치가 빨라 상대의 성향과 분위기를 잘 파악해요</ul>
                <ul>안정과 평온을 중시해요!</ul>
            </ExpBody>

            <RecWholeBodyWrapper>
                <RecBodyWrapper>
                    <RecBodyTitle>함께 챌린지를 해봐요!</RecBodyTitle>
                    <RecBody>
                        
                        <RecommandFriend friendData = {friendData}/>
                        
                    </RecBody>
                </RecBodyWrapper>

                <RecCAUBodyWrapper>
                    <RecCAUTitle>"중앙대학교" 정원사를 찾나요?</RecCAUTitle>
                    <RecCAUBody>
                        <ImgDom>
                            <CauImg src={getImgUrl("im4")} />
                        </ImgDom>
                        <ImgDom>
                            <CauImg src={getImgUrl("im5")} />
                        </ImgDom>
                        <ImgDom>
                            <CauImg src={getImgUrl("im6")} />
                        </ImgDom>
                    </RecCAUBody>
                </RecCAUBodyWrapper>
            </RecWholeBodyWrapper>
        </TestBox>
        </TestresultPage>
    );
};

export default TestResultPage;