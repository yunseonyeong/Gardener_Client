import React,{useState} from "react";
import styled from "styled-components";
import { AiOutlineMail,AiOutlineSend } from "react-icons/ai";
import Modal from "react-modal";

Modal.setAppElement('#root');

const MessageModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(0);

    function toggleMdodal(){
        setModalIsOpen(!modalIsOpen);
    }

    const MessageWrapper = styled.div`
    height: 15%;
    width: 15%;
    display: inline-block;
    margin-top: 0.8rem;
    margin-left: 39.5rem;
    `;

    const MessageDom = styled.span`
    cursor: grab;
    height: 20px;
    width: 20px;
    `;

    const SendDom = styled.span`
    cursor: grab;
    height: 15%;
    width: 15%;
    `;

    const ModalDom = styled.div`
    width: 100px;
    height: 200px;
    display: inline-box;
    `;

    return (
        <MessageWrapper>
        <MessageDom onClick={toggleMdodal}><AiOutlineMail size={25}/></MessageDom>
        
        <Modal 
        className="messageModal" 
        isOpen = {modalIsOpen}
        onRequestClose = {toggleMdodal}
        contentLabel = "Message"
        style={
            {
                overlay: {
                    backgroundColor: 'grey'
                },
                content: {
                    color: 'white'
                }
            }
        }
        >
            <ModalDom>
                안녕
                <span onClick={toggleMdodal}><AiOutlineSend /></span>
            </ModalDom>
        </Modal>
        </MessageWrapper>
    );

};

export default MessageModal;