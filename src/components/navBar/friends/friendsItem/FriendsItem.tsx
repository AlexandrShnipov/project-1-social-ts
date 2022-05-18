import React from "react";
import s from './FriendsItem.module.css'
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../../../redux/state";

const FriendsItem = (props: FriendsType) => {
    return (
                <li className={s.navListItem}>
                    <NavLink className={s.navListItemLink} to={''}>
                        <img className={s.navListItemImg} src={props.photo} alt="photo user"/>
                        {props.name}
                    </NavLink>
                </li>
    )
}

export default FriendsItem;