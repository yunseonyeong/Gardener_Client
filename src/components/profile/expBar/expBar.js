import React from "react";
import styled from "styled-components";

const expBar = (props) => {
    
    const {bgcolor, getexp} = props;
    
    const ContainerStyle = {
        height:30,
        width: '80%',
        background: '#EEEEEE',
        borderRadius: '10px',
        }

    const FilterStyle = styled.div`
        height: 100%;
        width: ${getexp}%;
        background: linear-gradient(90deg, #519259 0%, #7FC087 100%);
        border-radius: 10px;
        textAlign: 'right';
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