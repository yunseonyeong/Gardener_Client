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
    props.setNotifyModalOpen(true);
    props.setShowTimer(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]); 
      setCount(count + 1); 
    }, 70);
    if (count === txt.length) {
     
      clearInterval(interval); 
      setTimeout(() => {
      handleAfterAction();
      }, 2000);
    }
    return () => clearInterval(interval); 
  });

  return (
    <Msg>{text}</Msg>    
  )
}

export default WelcomeModal