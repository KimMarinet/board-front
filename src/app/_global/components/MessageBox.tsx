import React from "react";
import MessageType from "../types/MessageType";
import styled from "styled-components";
import color from "../styles/color";
import fontsize from "../styles/fontsize";

const { normal } =fontsize

const StyledMessage = styled.div`
    font-size: ${normal};
    color: ${({color: c}) => c? color[c] : c};
    padding: 7px 10px;
    text-align: center;
    margin: 5px 0px 5px;
`;

const MessageBox = ({children, color, message}: MessageType) => {
    if(children) message = children

    message = Array.isArray(message) ? message : message ? [message] : []
    if(message.length === 0) return <></>


    return message.map((m, i) => (<StyledMessage className="message" key={i + '-' + m} color={color ?? 'primary'}>{m}</StyledMessage>))
}

export default React.memo(MessageBox)