import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const TimeAttackDom = styled.div`
  width : 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timer = styled.div`
  visibility: ${(props) => (props.showTimer ? "visible" : "hidden")};
  background-color: #ff9595;
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "dungeunmo";
  color: white;
  border-radius: 20px;
  padding : 3%;
`;


function useInterval(callback) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
}

const TimeAttack = ({ targetTime, showJoinBtn, setShowTimer }) => {
  const calculator = () => Math.floor((new Date(targetTime) - new Date() - 9*60*60*1000 ) / 1000);
  const [hour, setHour] = useState(calculator());
  const [min, setMin] = useState(calculator());
  const [sec, setSec] = useState(calculator());

  useInterval(()=> {
    setHour(parseInt(calculator()/3600));
    setMin(parseInt(calculator()/60 % 60));
    setSec(calculator()%60);
  }, 100)

  return (
    <TimeAttackDom>
      <Timer showTimer={showJoinBtn}>
        {hour} : {min} : {sec}
      </Timer>
    </TimeAttackDom>
  );
}

export default TimeAttack