import React from "react";
import s from './Messages.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {DialogsPageType, MessageElementType, MessageTextType} from "../../redux/state";
import ContainerPage from "../../common/containerPage/ContainerPage";
import TitlePage from "../../common/TitlePage/TitlePage";


type MessagesPropsType = {
    stateMessagesPage: DialogsPageType,
}

const Messages = (props: MessagesPropsType) => {

    let messagesName = props.stateMessagesPage.messagesElements.map((elementName: MessageElementType) =>
        <DialogItem
            key={elementName.id}
            id={elementName.id}
            name={elementName.name}
            photo={elementName.photo}/>)
    let messages = props.stateMessagesPage.messagesText.map((message: MessageTextType) =>
        <Message
            key={message.id}
            id={message.id}
            message={message.message}/>)

    return (
        <ContainerPage>
            <div className={s.dialogs}>
                <TitlePage title={'Messages'}/>
                <div className={s.dialogsItems}>
                    <div className={s.dialogItem}>
                        {messagesName}

                    </div>
                    <div className={s.dialogItemMessageWrap}>
                        {messages}
                    </div>
                </div>
            </div>
        </ContainerPage>
    )
}

export default Messages;