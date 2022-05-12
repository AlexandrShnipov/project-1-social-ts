import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {

    let path = '/messages/' + props.id;

    return (
        <div className={s.dialogItemUser}>
            <NavLink className={({isActive}) => isActive ? `${s.dialogItemUserLink} ${s.active}` : s.dialogItemUserLink} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <p className={s.dialogItemMessage}>{props.message}</p>
    )
}

const Messages = () => {

    let messagesElement = [
        {id: '1', name: 'Dasha'},
        {id: '2', name: 'Sasha'},
        {id: '3', name: 'Dima'},
        {id: '4', name: 'Pasha'},
        {id: '5', name: 'Lena'},
        {id: '6', name: 'Sveta'}
    ]

    let messagesText = [
        {id: '1', message: 'Hi'},
        {id: '1', message: 'How is your it-kamasutra'},
        {id: '1', message: 'Yo'},
        {id: '1', message: 'Yo'}
    ]

    let messagesName = messagesElement.map(elementName => <DialogItem id={elementName.id} name={elementName.name}/>)
    let messages = messagesText.map(message => <Message id={message.id} message={message.message}/>)

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