import React from "react";
import s from './Messages.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {MessageElementType, MessageTextType} from "../../index";

type MessagesPropsType = {
    messagesElement: Array<MessageElementType>;
    messagesText: Array<MessageTextType>;
}

const Messages = (props: MessagesPropsType) => {

    let messagesName = props.messagesElement.map((elementName: MessageElementType) => <DialogItem key={elementName.id} id={elementName.id} name={elementName.name}/>)
    let messages = props.messagesText.map((message: MessageTextType) => <Message key={message.id} id={message.id} message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTile}>Dialogs</h2>
            <div className={s.dialogsItems}>
                <div className={s.dialogItem}>
                    {messagesName}

                </div>
                <div className={s.dialogItemMessageWrap}>
                    {messages}
                </div>
            </div>
        </div>
    )
}

export default Messages;