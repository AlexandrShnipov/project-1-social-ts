import React from "react";
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";
import FriendsItem from "./friendsItem/FriendsItem";
import {FriendsType} from "../../../redux/state";

type FriendsPropsType = {
    friends: Array<FriendsType>,
}

//variants one
// const getActiveClass = ({isActive}: { isActive: boolean }): any  => isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

//variants two
const getActiveClass = ({isActive}: any) =>
    isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

const Friends = (props: FriendsPropsType) => {

    let friendsElement = props.friends.map((friend: FriendsType) => <FriendsItem  key={friend.id} {...friend}/>);

    return (

        <li className={s.navBarItem}>
            <NavLink className={getActiveClass} to={'/friends'}> Friends </NavLink>
            <ul className={s.navListItemFriends}>
                {friendsElement}
            </ul>
        </li>
    )
}

export default Friends;