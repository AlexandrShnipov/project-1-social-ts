import React from "react";
import s from './Message.module.css';
import {MessageTextType} from "../../../redux/state";

const Message = (props: MessageTextType) => {
    return (
        <p className={s.dialogItemMessage}>{props.message}</p>
    )
}

export default Message;