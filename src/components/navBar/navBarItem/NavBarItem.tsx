import React from "react";
import s from './NavBarItem.module.css';
import {NavLink} from "react-router-dom";
import {ItemType} from "../../../redux/state";

//variants one
// const getActiveClass = ({isActive}: { isActive: boolean }): any  => isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

//variants two
const getActiveClass = ({isActive}: any) =>
    isActive ? `${s.active} ${s.navBarItemLink}` : s.navBarItemLink

const NavBarItem = (props: ItemType) => {
    return (
        <li className={s.navBarItem}>
            {/*<NavLink className={getActiveClass as any} to="/profile">Profile</NavLink>*/}
            <NavLink className={getActiveClass} to={props.to}>{props.linkText}</NavLink>
        </li>
    )
}

export default NavBarItem;