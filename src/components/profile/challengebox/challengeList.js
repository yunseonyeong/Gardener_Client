import React from "react";
import styled from "styled-components";

const ChallengeState = () => {

    const todayTime = () => {
        let now = new Date;
        let todayMonth = now.getMonth();
        let todayDay = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        return todayMonth+'/'+todayDay + ' ' + hours + ':' + minutes + ' '
    }

    const StateDom = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    `;

    const ChallengeState = styled.span`
    font-size: 1.1rem;
    font-weight: 400;
    margin-right: 2%;
    font-family: 'dungeunmo';
    `;

    const ChallengeCompleted = styled.div`
    display: inline-box;
    width: 1.8rem;
    height: 1rem;
    background: #C4C4C4;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    `;

    const ChallengeOnProgress = styled.div`
    display: inline-box;
    width: 1.8rem;
    height: 1rem;
    background: #F4EEA9;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    `;

    const OnProgress = styled.span`
    font-size:0.7rem;
    font-weight: 400;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    font-family: 'dungeunmo';
    `;

    const Completed = styled.span`
    font-size: 0.7rem;
    font-weight: 400;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    font-family: 'dungeunmo';
    `;

    const CurrentTime = styled.span`
    font-size: 0.8rem;
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    font-family: 'dungeunmo';
    `;

    return(
        <StateDom>
            <ChallengeState>진행중인 챌린지</ChallengeState>
            <ChallengeCompleted />
            <Completed>완료</Completed>
            <ChallengeOnProgress />
            <OnProgress>미완료</OnProgress>
            <CurrentTime>{todayTime()}기준</CurrentTime>
        </StateDom>
    );
};

export default ChallengeState;