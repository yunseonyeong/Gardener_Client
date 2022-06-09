import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color : white;
  font-family: 'dungeunmo';
`;

const LevelUpModal = (props) => {

    const content = "LEVEL UP !!!";
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setText(text + content[count]); 
            setCount(count + 1); 
          }, 70);
          if (count === content.length) {
           
            clearInterval(interval); 
            setTimeout(() => {
            props.setLevelUp(false);
            }, 2000);
          }
          return () => clearInterval(interval); 
    });


    return(
        <Content>{text}</Content>
    );
};

export default LevelUpModal;
