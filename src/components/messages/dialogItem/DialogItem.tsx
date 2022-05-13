import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {MessageElementType} from "../../../index";

const DialogItem = (props: MessageElementType) => {

    let path = '/messages/' + props.id;

    return (
        <div className={s.dialogItemUser}>
            <NavLink className={({isActive}) => isActive ? `${s.dialogItemUserLink} ${s.active}` : s.dialogItemUserLink} to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
