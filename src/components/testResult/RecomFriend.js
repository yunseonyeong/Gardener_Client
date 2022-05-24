import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const FriendListtDom = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 120%;
`;

const FlistTitle = styled.div`
    display: flex;
    
    margin-bottom: 3%;
    font-family: 'dungeunmo';
    `;

const DevTypeTitle = styled.div`
    display: flex;
    font-family: 'dungeunmo';
`;

const FrlDom = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

const FriendImg = styled.img`
    max-width:80%;
`;

const RecommandFriend = (props) => {

    return(
        <FriendListtDom>
            {
                props.friendData.map((data)=>{
                    return(
                        <FrlDom>
                            {/* <FlistTitle>{data.name}</FlistTitle> */}
                            <Link to={`/profile/${data.Id}`}>
                            <FriendImg src={data.profileImgURL}/>
                            {/* <DevTypeTitle>{data.devType}</DevTypeTitle> */}
                            </Link>
                        </FrlDom>
                        
                    );
                })
            }
        </FriendListtDom>
    );
};

export default RecommandFriend;