<<<<<<< HEAD
import React, { useEffect,useState } from "react";
import styled from 'styled-components';
=======
import React, { useEffect, useState } from "react";
import styled from "styled-components";
>>>>>>> 64e4a88da0d1802624f524eeff5e2dca46255f23

const Content = styled.div`
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
  color : white;
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
=======
  color: #9999ff;
`;

const LevelUpModal = (props) => {
  const content = "LEVEL UP !!!";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
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

  return <Content>{text}</Content>;
};

export default LevelUpModal;
>>>>>>> 64e4a88da0d1802624f524eeff5e2dca46255f23
