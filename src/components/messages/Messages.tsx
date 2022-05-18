import React from "react";
import s from './Messages.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsPageType, MessageElementType, MessageTextType} from "../../redux/state";


type MessagesPropsType = {
    stateMessages: DialogsPageType,
}

const Messages = (props: MessagesPropsType) => {

    let messagesName = props.stateMessages.messagesElements.map((elementName: MessageElementType) =>
        <DialogItem
            key={elementName.id}
            id={elementName.id}
            name={elementName.name}
            photo={elementName.photo}/>)
    let messages = props.stateMessages.messagesText.map((message: MessageTextType) =>
        <Message
            key={message.id}
            id={message.id}
            message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTile}>Messages</h2>
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