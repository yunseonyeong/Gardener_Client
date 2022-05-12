import React from "react";
import BlueNav from "../../components/nav/basicNav/blueNav";
import styled from "styled-components";
import getImgUrl from '../../globalLogic';

const TestresultPage = styled.div`
    display: flex;
    flex-direction: column;
`;

const TestBox = styled.div`
    display: inline-box;
    width: 700px;
    height: 500px;
    background: #C4C4C4;
    margin-left: 20%;
`;

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #C98484;
    justify-contet: center;
    align-items: center;
`;

const StyleContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7%;
`;

const StyleTitle = styled.div`
    background:#C4C4C4;
    justify-content: center;
    align-items: center;
    padding: 7%;
    margin-bottom: 10%;
`;

const StyleBody = styled.div`
    background:#C4C4C4;
    justify-content: center;
    align-items: center;
    padding: 5%;
`;

const LogoDom = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  margin-left: 25%;
`;

const Logo = styled.img`
  max-width: 80%;
  margin-top : 7%;
`;

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const TestResultPage = () => {
    return(
        <TestresultPage>
            <BlueNav/>
        <TestBox>
        <ResultWrapper>
            <StyleWrapper>
                <LogoDom>
                    <Logo src={getImgUrl("boyLogo")} />
                </LogoDom>
                <StyleContentWrapper>
                <StyleTitle>aasdfasdfa</StyleTitle>
                <StyleBody>basdfasdfasdf</StyleBody>
                </StyleContentWrapper>
            </StyleWrapper>

            <BodyWrapper>

            </BodyWrapper>
        </ResultWrapper>
        </TestBox>
        </TestresultPage>
    );
};

export default TestResultPage;