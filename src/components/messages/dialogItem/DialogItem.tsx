import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {MessageElementType} from "../../../redux/state";

const DialogItem = (props: MessageElementType) => {

    let path = '/messages/' + props.id;

    return (
        <div className={s.dialogItemUser}>
            <NavLink className={({isActive}:any) =>
                isActive ? `${s.dialogItemUserLink} ${s.active}` : s.dialogItemUserLink} to={path}>
                <img className={s.dialogUserPhoto} src={props.photo} alt="photo user"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
