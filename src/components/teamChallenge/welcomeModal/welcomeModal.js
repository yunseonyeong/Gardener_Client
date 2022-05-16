import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Msg = styled.div`
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color : white;
`;


const WelcomeModal = (props) => {

  const txt = "Welcome to New Challenge !!!";
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  
  const handleAfterAction = () => {
    props.setWelcomeMsgOpen(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]); // 이전 set한 문자 + 다음 문자
      setCount(count + 1); // 개수 만큼 체크
    }, 120);
    if (count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      setTimeout(() => {
      handleAfterAction();
      }, 2000);
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    <Msg>{text}</Msg>    
  )
}

export default WelcomeModal