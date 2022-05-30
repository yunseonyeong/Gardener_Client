import React from "react";
import styled from "styled-components";

const expBar = (props) => {
    
    const {bgcolor, getexp} = props;
    console.log(bgcolor);
    const ContainerStyle = {
        height:30,
        width: '80%',
        background: '#EEEEEE',
        borderRadius: '10px',
        }

    const FilterStyle = styled.div`
        height: 100%;
        width: ${getexp}%;
        background: linear-gradient(90deg, ${bgcolor[0]} 0%, ${bgcolor[1]} 100%);
        border-radius: 10px;
        text-align: 'right';
    `;

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 5,
        float: "right",
        marginTop: 3,
      }

    return(
        <div style={ContainerStyle}>
            <FilterStyle>
                <span style={labelStyles}>{`${getexp}%`}</span>
            </FilterStyle>
        </div>
    );
}

export default expBar;